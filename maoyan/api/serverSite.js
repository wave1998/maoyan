const express = require("express");
const tools = require("./module/tools");
const db = require("./module/db");
const app = express();
app.use(express.static(__dirname+"/upload"))
app.get("/send",async function (req,res) {
    /*
    * 1、接收数据 phoneId，生成验证码code
    * 2、根据手机号去短信集合当中查看是否有记录
    *       1、有记录
    *           判断发送时间是否过期
    *               1、过期
        *                将验证与发送时间重置
        *           2、未过期
        *               提示未过期。
    *       2、无记录
    *           创建一条记录
    *       */
    const phoneId = req.query.phoneId;
    const code = tools.getRandom(100000,999999);
    // 根据手机号去短信集合当中查看是否有记录
    const info = await db.findOne("phoneCode",{phoneId})
    if(info){
        if(Date.now()-info.sendTime>5*60*1000){
            // const code = tools.send(phoneId);
            // 过期，可以重发
            await db.updateOne("phoneCode",{_id:info._id},{$set:{sendTime:Date.now(),code}});
            res.json({
                ok:1,
                msg:"成功",
                code
            })
        }else{
            tools.json(res,-1,"时间未到还差"+Number.parseInt((1000*60*5-(Date.now()-info.sendTime))/1000)+"秒")
        }
    }else{
        // const code = tools.send(phoneId);
        // 无记录
        await db.insertOne("phoneCode",{
            phoneId,
            code,
            sendTime:Date.now()
        })
        res.json({
            ok:1,
            msg:"成功",
            code
        })
    }
})
app.post("/login",async function (req,res) {
    /*
    1、接收手机号和验证码  phoneId code
    2、根据参数去phoneCode集合当中查看是否有符合条件 。
        1、符合
            1、是否有该用户
                1、有
                    更新用户的最后登陆时间
                2、无
                    增加一个用户
        2、不符合
            返回验证码错误
    */
    const {phoneId,code} = req.body;
    const info = await db.findOne("phoneCode",{
        phoneId,
        code
    })
    if(info){
        if(Date.now()-info.sendTime>1000*60*5){
            tools.json(res,-1,"验证过期了，请重新发送")
        }else{
            const user = await db.findOne("userList",{
                phoneId
            })
            if(user){
                await db.updateOne("userList",{
                    phoneId
                },{
                    $set:{
                        loginTime:Date.now()
                    }
                })
                res.json({
                    ok:1,
                    msg:"登陆成功"
                })
            }else{
                await db.insertOne("userList",{
                    phoneId,
                    loginTime:Date.now(),
                    regTime:Date.now(),
                    moneySum:1000
                })
                res.json({
                    ok:1,
                    msg:"成功",

                })
            }
        }
    }else{
        tools.json(res,-1,"验证码错误")
    }
})
app.get("/search",async function (req,res) {
    const keyword =  req.query.keyword;
    const shopList = await db.find("shopList",{
        whereObj:{
            shopName:new RegExp(keyword)
        },
        sortObj:{
            createTime:-1
        }
    });
    res.json({
        ok:1,
        shopList
    })
})
app.get("/shopTypeList",async function (req,res) {
    const limit =  (req.limit || 60)/1;// 指定条数
    const results = await db.find("shopTypeList",{
        limit,
        sortObj:{
            createTime:-1
        }
    });
    res.json({
        ok:1,
        shopTypeList:tools.changeArr(results)
    })

})
app.get("/shopList",async function (req,res) {
    let pageIndex = req.query.pageIndex/1;
    let pageSum = 1;
    let limit = 7;
    const count = await db.count("shopList");
    pageSum = Math.ceil(count/limit);
    if(pageSum < 1)
        pageSum = 1;
    if(pageIndex > pageSum)
        pageIndex = pageSum;
    if(pageIndex < 1)
        pageIndex = 1;
    const shopList = await db.find("shopList",{
        sortObj:{
            createTime:-1
        },
        skip:(pageIndex-1)*limit,
        limit
    });
    res.json({
        ok:1,
        shopList,
        pageIndex,
        pageSum
    })
});
app.listen(8088,function () {
    console.log("success");
})
const  tools = require("./tools");
const  db = require("./db");
const  {upPic} = require("./upPic");
module.exports.addShopType = async function (req,res) {
    const status = await upPic(req,"shopTypePic");
    if(status.ok === 1){
        // 将内容放置到数据库
        await db.insertOne("shopTypeList",{
            shopTypeName:status.params.shopTypeName,
            shopTypePic:status.params.newPicName,
            createTime:Date.now()
        })
        tools.json(res,1,"插入成功")
    }else{
        tools.json(res);
    }
    // res.json(status);
}
module.exports.getShopTypeList = async function (req,res) {
    let pageIndex = req.query.pageIndex/1;
    let pageSum = 1;
    let limit = 2;
    let whereObj = {};
    const shopTypeName = req.query.shopTypeName || {};// 当shopTypeName为undefined的时候，将shopTypeName设为{}
    if(shopTypeName.length>0)
        whereObj.shopTypeName = new  RegExp(shopTypeName) ;
    const count = await db.count("shopTypeList",whereObj);
    pageSum = Math.ceil(count/limit);
    if(pageSum < 1)
        pageSum = 1;
    if(pageIndex > pageSum)
        pageIndex = pageSum;
    if(pageIndex < 1)
        pageIndex = 1;
    const shopTypeList = await db.find("shopTypeList",{
        whereObj,
        sortObj:{
            createTime:-1
        },
        skip:(pageIndex-1)*limit,
        limit
    });
    res.json({
        ok:1,
        shopTypeList,
        pageIndex,
        pageSum
    })
}
module.exports.allShopTypeList = async function (req,res) {
    const shopTypeList = await  db.find("shopTypeList",{
        sortObj:{
            createTime:-1
        }
    })
    res.json({
        ok:1,
        shopTypeList
    })
}
module.exports.getShopTypeById = async function (req,res) {
    const shopTypeInfo = await db.findOneById("shopTypeList",req.query.shopTypeId);
    res.json({
        ok:1,
        shopTypeInfo
    })
}
module.exports.putShopTypeList = async function (req,res) {
    const {ok,params} = await upPic(req,"shopTypePic");
    if(ok === -1)
        tools.json(res);
    else{
        // 成功
        const $set = {
            shopTypeName:params.shopTypeName,
            createTime:Date.now()
        }
        if(ok === 1){
            $set.shopTypePic = params.newPicName
        }
        await db.updateOneById("shopTypeList",params.shopTypeId,{$set});
        res.json({
            ok:1,
            msg:"修改成功"
        })
    }
    // if(status.ok === 1){
    //     // 将内容放置到数据库
    //     // await db.insertOne("shopTypeList",{
    //     //     shopTypeName:status.params.shopTypeName,
    //     //     shopTypePic:status.params.newPicName,
    //     //     createTime:Date.now()
    //     // })
    //     // tools.json(res,1,"插入成功")
    // }else{
    //     tools.json(res);
    // }
}
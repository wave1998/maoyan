const express = require("express");
const db = require("./module/db");
const app = express();
app.get("/goods/:id",async function (req,res) {
    const goodsInfo = await db.findOneById("goods",req.params.id);
    res.json({
        ok:1,
        goodsInfo
    })
})
app.get("/goods",async function (req,res) {
    const goodsList = await db.find("goods",{
        sortObj:{
            createTime:-1
        }
    })
    res.json({
        ok:1,
        goodsList
    })
})
app.get("/joinCar",async function (req,res) {
    setTimeout(async ()=>{
        const {goodsId,userName} = req.query;
        /*加入购物车
        * 1、判断库存是否充足
        *       1、充足
        *           1、库存减1
        *           2、查看该用户购物车内是否有该商品
        *               1、有，购买数量加1
        *               2、无，增加一条购物车信息
        *       2、不充足，返回库存不足*/
        const goodsInfo = await db.findOneById("goods",goodsId);
        // 判断库存是否充足

        if(goodsInfo.goodsStore>0){
            // 库存减1
            await db.updateOneById("goods",goodsId,{$inc:{goodsStore:-1}});
            const carInfo = await db.findOne("carList",{userName,goodsId:goodsInfo._id});
            // 判断购物车是否有该商品
            if(carInfo){
                await db.updateOne("carList",{_id:carInfo._id},{$inc:{buyNum:1}});
                res.json({
                    ok:1,
                    msg:"加入购物车成功"
                })
            }else{
                await db.insertOne("carList",{
                    buyNum:1,
                    goodsId:goodsInfo._id,
                    goodsName:goodsInfo.goodsName,
                    goodsPrice:goodsInfo.goodsPrice,
                    isChecked:true,
                    userName
                })
                res.json({
                    ok:1,
                    msg:"加入购物车成功"
                })
            }
        }else{
            res.json({
                ok:-1,
                msg:"库存不足"
            })
        }
    },1000)


})
app.get("/carList",async function (req,res) {
    const userName = req.query.userName;
    const carList = await db.find("carList",{
        whereObj:{
            userName
        }
    })
    res.json({
        ok:1,
        carList
    })
})
app.get("/changeCheckedById",async function (req,res) {
    await db.updateOneById("carList",req.query.id,{
        $set:{
            isChecked:req.query.isChecked === "true"?true:false
        }
    })
    res.json({
        ok:1,
        msg:'成功'
    })
})
app.get("/changeAllByUserName",async function (req,res) {
    const {userName,isAll} = req.query;
    await db.updateMany("carList",{
        userName
    },{
        $set:{
            isChecked:isAll==="true"?true:false
        }
    })
    res.json({
        ok:1,
        msg:"成功"
    })
})
app.listen(80,function () {
    console.log("success");
})
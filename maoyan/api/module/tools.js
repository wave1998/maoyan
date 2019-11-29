const md5 = require("md5");
const jwt = require("jwt-simple");
const request = require("request");
const querystring = require("querystring")
const KEY = "&^%&*";
module.exports.getRandom = function (min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
// 将一维转为二维
module.exports.changeArr = function (arr,len=10) {
    const newArr = [];
    for (var i = 0; i < arr.length; i += len) {
        newArr.push(arr.slice(i, i + len))
    }
    return newArr;
}
module.exports.send = function (mobile) {
    const str = this.getRandom(100000,999999);
    console.log(111111,str);
    const params = {
        mobile,
        tpl_id:"164473",
        tpl_value:"#code#="+str,
        key:"b3549c45f2048"
    }
    const url = "http://v.juhe.cn/sms/send?"+querystring.stringify(params);
    return new Promise((resolve,reject)=>{
        request(url,function (err,response,body) {
            console.log(body);
            if(!err && response.statusCode === 200){
                resolve(JSON.parse(body));
            }else{
                reject("发生异常")
            }
        })
    })

}
// 获取当前时间   年-月-日 时:分:秒
module.exports.getNowTime = function () {
    const date = new Date();
    return date.getFullYear()+"-"
        + (date.getMonth()+1).toString().padStart(2,0) + "-"
        +date.getDate().toString().padStart(2,0) + " "
        +date.getHours().toString().padStart(2,0) + ":"
        +date.getMinutes().toString().padStart(2,0) + ":"
        +date.getSeconds().toString().padStart(2,0);
}
// res:响应对象
module.exports.json = function (res,ok = -1,msg = "网络连接错误") {
    res.json({
        ok,
        msg
    })
}
module.exports.enMd5 = function (passWord) {
    const str = "*&%*&^%*&"
    return md5(passWord+str);
};
// 生成和token
module.exports.encode = function (info) {
    return jwt.encode({
        ...info,
        ...{
            lastTime:Date.now()+1000*60*60*1
            // lastTime:Date.now()+10000
        }
    },KEY);
}
// 1、过期了，2 token不正确 3、正常
module.exports.decode = function (token) {
    try{
        const info = jwt.decode(token,KEY);
        console.log("info",info);
        // 判断是否过期
        if(info.lastTime < Date.now()){
            // 过期了
            return {
                ok:1,
                msg:"过期了"
            }
        }else{
            // 正确
            return {
                ok:3,
                msg:"正常",
                info
            }
        }
    }catch(err){
        // token异常
        return {
            ok:2,
            msg:"token异常"
        }
    }
}

// console.log(module.exports.getNowTime());
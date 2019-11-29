/*
* 上传图片
* -1:失败
* 1：成功
* 2：未上传
* */
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
// 存放文件的地址
const uploadDir = path.resolve(__dirname,"../upload");
module.exports.upPic = function (req,picName) {
    /*1、不允许为空，2、上传正确的图片格式，3 需要 将图片重命名
    * 返回上传的结果*/
    const form = new formidable.IncomingForm()
    form.encoding = "utf-8";// 编码格式。
    form.uploadDir = uploadDir// 上传文件的地址
    form.keepExtensions = true;// 是否保留上传文件的扩展名
    return new Promise((resolve,reject)=>{
        form.parse(req,function (err,params,file) {
            console.log(1111,file,params);
            if(err)// 判断是否异常。
                reject({ok:-1,msg:"网络异常"})
            else{
                const picInfo = file[picName];
                if(!picInfo){
                    resolve({ok:2,params,msg:"请选择要上传的图片"})
                }
                else if(picInfo.size <= 0){// 判断是否上传图片
                    fs.unlink(picInfo.path,function (err) {
                        resolve({ok:2,params,msg:"请选择要上传的图片"})
                    })
                }else{
                    // 指定图片的格式
                    const extNameArr = [".gif",".png",".jpg"];
                    // 上传的图片格式。
                    const upExtName = path.extname(picInfo.path).toLowerCase();
                    // 验证上传的图片格式是否符合要求
                    if(extNameArr.includes(upExtName)){
                        // const newPicName = Date.now()+upExtName;
                        params.newPicName = Date.now()+upExtName;
                        fs.rename(picInfo.path,uploadDir+"/"+params.newPicName,function (err) {
                            resolve({ok:1,msg:"成功",params})
                        })
                    }else{
                        fs.unlink(picInfo.path,function (err) {
                            reject({ok:-1,msg:"请选择正确的图片格式：.gif,.png,.jpg"})
                        })
                    }

                }
            }
        })
    })

}
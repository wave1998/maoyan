import React from 'react';
import  '../assets/css/login.css'
export default class Login extends React.Component{
    render() {
        return (
            <div>
                <div className="header">
                    <div className="iconfont"></div>
                    <div className="title">
                        <h1>猫眼电影</h1>
                    </div>
                </div>
                <div className="tab">
                    <ul>
                        <li>
                            <h2 className="current">美团账号登录</h2>
                        </li>
                        <li>
                            <h2>手机验证登录</h2>
                        </li>
                    </ul>
                    <ol>
                        {/* <li className="current">
                            <input type="text" placeholder="账户名/手机号/Email" />
                            <input type="text" placeholder="请输入您的密码" />
                            <button>登录</button>
                        </li> */}
                        <li>
                            <div className="tab2">
                                <input type="text" placeholder="请输入手机号" />
                                
                                <p>获取验证码</p>
                            </div>
                            <div className="tab3"> 
                                <input type="text" placeholder="请输入短信验证码"/> 
                            </div>
                            <button>登录</button>
                        </li>
                    </ol>
                </div>
                <div className="footer">
                        <p>立即注册</p>
                        <p>找回密码</p>
                </div>
                <div className="phone">
                     <span>© 猫眼电影 客服电话：<a>400-670-5335</a></span>
                </div>
            </div>       
        )
    }
}



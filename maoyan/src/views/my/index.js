import React from 'react';
import  '../../assets/css/my.css'
export default class My extends React.Component{
    render() {
        return (

            <div className="body">
                <div className="body_top">
                    <img
                        src="https://img.meituan.net/avatar/57c41b979ad6e920538179d12b5bac1638655.jpg"
                        className="head_icon"
                    />
                </div>
                <div className="orders">
                    <p>我的订单</p>
                    <ul>
                        <li>
                            <i />
                            <p>电影</p>
                        </li>
                        <li>
                            <i />
                            <p>商城</p>
                        </li>
                    </ul>
                </div>
                <div className="group">
                    <ul>
                        <li>
                            <span>在线观影</span>
                            <span>></span>
                        </li>
                        <li>
                            <span>在线观影</span>
                            <span>></span>
                        </li>
                        <li>
                            <span>在线观影</span>
                            <span>></span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
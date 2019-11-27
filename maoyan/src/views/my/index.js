import React from 'react';
import '../../assets/css/my.css'
import CommonHeader from "../../components/common/CommonHeader";
export default class My extends React.Component{
    render() {
        return (
            <div className="body">
                <CommonHeader></CommonHeader>
                <div className="body_top">
                    <img
                        src="https://img.meituan.net/avatar/57c41b979ad6e920538179d12b5bac1638655.jpg"
                        className="head_icon"
                    />
                </div>
                <div className="orders">
                    <p className={"title"}>我的订单</p>
                    <div className="title-line"></div>
                    <ul>
                        <li className={"order-li"}>
                            <div className={"order-movie"}>
                                <p className={"order-p"}>电影</p>
                            </div>
                        </li>
                        <li className={"order-li"}>
                            <div className={"order-movie"} style={{backgroundImage:"url('https://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png')"}}>
                                <p className={"order-p"}>商城</p>
                            </div>
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
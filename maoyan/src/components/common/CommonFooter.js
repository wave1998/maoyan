import React from 'react'
import {NavLink} from "react-router-dom";

class CommonFooter extends React.Component {
    render() {
        return (
            <nav className="bottom-nav-bar">
                <NavLink className={"App-link"} activeClassName={"active"} exact  to={"/"}>
                    <div>
                    <span class="iconfont icon-dianying"></span>
                    <p>电影</p>
                    </div>
                    </NavLink>
                <NavLink className={"App-link"} activeClassName={"active"} to={"/cinema"}>
                    <div>
                <span class="iconfont icon-yingyuan"></span>
                    <p> 影院</p></div>
                   </NavLink>
                <NavLink className={"App-link"} activeClassName={"active"} to={"/my"}>
               <div>
                <span class="iconfont icon-wode"></span>
                    <p>我的</p></div>
                    </NavLink>
            </nav>
    )
    }
}
export default CommonFooter
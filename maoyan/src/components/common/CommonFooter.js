import React from 'react'
import {NavLink} from "react-router-dom";

class CommonFooter extends React.Component {
    render() {
        return (
            <nav className="bottom-nav-bar">
                <NavLink className={"App-link"} activeClassName={"active"} exact  to={"/"}>电影</NavLink>
                <NavLink className={"App-link"} activeClassName={"active"} to={"/cinema"}>影院</NavLink>
                <NavLink className={"App-link"} activeClassName={"active"} to={"/my"}>我的</NavLink>
            </nav>
    )
    }
}
export default CommonFooter
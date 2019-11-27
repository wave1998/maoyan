import React from 'react'
import {NavLink} from "react-router-dom";
class CommonFooter extends React.Component {
    render() {
        return (
            <nav>
                <NavLink className={"App-link"} activeClassName={"App-active"} exact  to={"/"}>电影</NavLink>
                <NavLink className={"App-link"} activeClassName={"App-active"} to={"/cinema"}>影院</NavLink>
                <NavLink className={"App-link"} activeClassName={"App-active"} to={"/my"}>我的</NavLink>
            </nav>
    )
    }
}
export default CommonFooter
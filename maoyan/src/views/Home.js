import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
} from 'react-router-dom'
import Index from "./Index";
import My from "./My";
import Ciname from './Ciname'
class Home extends React.Component{
    render() {
        return (
            <div>
                <nav>
                    <NavLink className={"App-link"} activeClassName={"App-active"} exact  to={"/"}>电影</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/ciname"}>影院</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/my"}>我的</NavLink>
                </nav>
                <Switch>
                    <Route path={"/ciname"} component={Ciname}></Route>
                    <Route path={"/my"} component={My}></Route>
                    <Route path={"/"} component={Index}></Route>
                </Switch>
            </div>
        )
    }
}
export default Home

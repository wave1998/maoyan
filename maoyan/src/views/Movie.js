import React from 'react';
import '../assets/css/Index.css';
import Hoting from "../components/movie/Hoting";
import Comming from "../components/movie/Comming";
class Movie extends React.Component {
    constructor(){
        super();
        this.state={
            showHot:1
        }
    }
    render() {
        return (
            <div>
                <div className="top">
                    <div className="pageTitle">猫眼电影</div>
                    <ul className="topNav">
                        <li className={this.state.showHot===1?'active':''} onClick={()=>this.setState({showHot:1})}>正在热映</li>
                    <li className={this.state.showHot===0?'active':''} onClick={()=>this.setState({showHot:0})}>即将上映</li>
            </ul>
    </div>
        <div className="main">
            {
                this.state.showHot===1?<Hoting></Hoting>:<Comming></Comming>
            }
        </div>
    </div>
        )
    }
}
export default Movie
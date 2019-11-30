import React from 'react'
import '../../assets/css/cinema/navWrap.css'
import Brand from "./navWrap/Brand";
import HallType from "./navWrap/HallType.js";
import AllCity from "./navWrap/AllCity";

class NavWrap extends React.Component {
    constructor(){
        super();
        this.state={
            closeTab:false,
            brand:false,
            allCity:false,
            hallType:false,
        }
    }
    render() {
        return (
            <div className="nav-wrap" >
        <ul onClick={()=>this.setState({closeTab:!this.state.closeTab})}>
            <li onClick={()=>this.setState({allCity:true,brand:false,hallType:false})}>全城<span className="yo-ico">&#xf033;</span></li>
            <li onClick={()=>this.setState({brand:true,allCity:false,hallType:false})}>品牌<span className="yo-ico">&#xf033;</span></li>
            <li onClick={()=>this.setState({hallType:true,allCity:false,brand:false})}>特色<span className="yo-ico">&#xf033;</span></li>
        </ul>
                {
                    this.state.closeTab?
                    <div className={"closeTab"}>
                        {this.state.brand?<Brand></Brand>:null}
                        {this.state.hallType?<HallType></HallType>:null}
                        {this.state.allCity?<AllCity></AllCity>:null}
                    </div>:null
                }
        </div>
    )
    }
}

export default NavWrap
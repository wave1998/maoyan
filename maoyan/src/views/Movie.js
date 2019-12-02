import React from 'react';
import '../assets/movie/movie.css';
import Hoting from "../components/movie/Hoting";
import Comming from "../components/movie/Comming";
import CommonHeader from "../components/common/CommonHeader";
import Advert from "../components/common/Advert";
class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isMoblie:false,
        currentNum: 0,
        show: true,
        showHot:1,
        }
        }
        
        componentWillMount(){
            let isMoblie = this.state.isMoblie;
        this.setState({
        isMoblie:isMoblie
        })
        }
        
        componentDidMount() {
        // if(this.state.isMoblie){
        // }
        window.addEventListener('scroll', ()=>this.scrollHandler());
        }
        componentWillUnmount(){
        window.removeEventListener('scroll',()=>this.scrollHandler());
        }
        
        scrollHandler() {
            let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        if(scrollTop < this.state.currentNum){
        // console.log("向上滚")
        this.setState({
        currentNum:scrollTop,
        show: true
        })
        }
        if(scrollTop > this.state.currentNum+200){
        // console.log("向下滚")
        this.setState({
        currentNum:scrollTop,
        show: false
        })
        }
        }


  
    render() {
         let {isMoblie,show} = this.state;
        return (
           
            <div> 
                <div className="top"> 
                    <CommonHeader pageTitle={"猫眼电影"}></CommonHeader>
                    <div className={"header-2"}>
                   {
                show?
               <Advert ></Advert> : ''}
                    <ul className="topNav">
                    <li onClick={()=>{this.props.history.push("/location")}}>北京<span className="iconfont icon-xiala"></span></li>
                    <li>
                        <ul className="topNav-ul">
                        <li className={this.state.showHot===1?'active':''} onClick={()=>this.setState({showHot:1})}>正在热映</li>
                    <li className={this.state.showHot===0?'active':''} onClick={()=>this.setState({showHot:0})}>即将上映</li>

                        </ul>
                    </li>
                    <li><span className="iconfont icon-RectangleCopy" onClick={()=>{this.props.history.push("/search")}}></span></li>
            </ul></div>
            
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
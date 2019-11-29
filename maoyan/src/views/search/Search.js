import React from 'react';
import axios from 'axios'
import "../../assets/css/search/search.css"
import "../../assets/css/cinema/cinemaList.css"

// import DatePicker from 'antd/es/date-picker'; // 加载 JS
// import 'antd/es/date-picker/style/css'; // 加载 CSS

export default class Search extends React.Component{
    constructor(){
        super();
        this.state={
           cinemas:[],
         
        }
    }
    render() {
        return (
            <div className="search">
         
                <div className="title">
                  <span className="title1" onClick={()=>{this.props.history.push("/cinema")}}>返回</span>
                  <span className="title2">猫眼电影</span>
               </div>
                <div className="but">
                  <input type="text" className="but1" />
                  <span onClick={()=>{this.props.history.push("/cinema")}}>取消</span>
              </div>
              
           
           
             
            </div>
        )
    }
    componentDidMount(){
       
            axios.get("/ajax/search?kw=大&cityId=1&stype=2")
            .then(({data})=>{
                console.log(data.cinemas)
                this.setState({
                    cinemas:data.cinemas
                })
              
            })
        
        }
        
}

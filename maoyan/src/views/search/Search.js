import React from 'react';
import axios from 'axios'
import "../../assets/css/search/search.css"
import "../../assets/css/cinema/cinemaList.css"
import DetailHeader from '../../components/common/DetailHeader'

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
         
         <DetailHeader></DetailHeader>
                <div className="but">
                  <input type="text" className="but1" placeholder="搜影院" />
                  <span onClick={()=>{this.props.history.go(-1)}}>取消</span>
              </div>
              
           
           
             
            </div>
        )
    }
    componentDidMount(){
       
            axios.get("/ajax/search?kw=大&cityId=1&stype=2")
            .then(({data})=>{
                console.log(data.cinemas)
                this.setState({
                   
                })
              
            })
        
        }
         
     
    }
        


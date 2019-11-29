import React,{Fragment} from "react"
import axios from "axios"
import "../../assets/css/eat/eat.css"

class Eat extends React.Component{
    constructor(){
        super();
        this.state={
            //   curNumberDesc:1,
            //   price:1,
            //   title:1,
            //   imgurl:1,
            dealList:[]



        }
    }
    render(){
        return(
            <div className="little_eat">
                
                <p className="P1">影院超值套餐</p>
            {
                this.state.dealList.map((v,index)=>(
                    v.dealList.map(k=>
                        <div key={index} className="item_eat">
                      
                        <img className="im" src={k.imageUrl.replace("w.h","440.0")}/>
                        <div className="first">{k.titleTag}</div>
                        <div className="secound">{k.secondTitle}</div> 
                        <div className="third">{"￥"+k.price}</div>
                        <div className="fourth">{k.curNumberDesc}</div>
                        <div className="five">去购买</div> 
                        
                        </div>)
                   
                    
                    
                ))

            }
                 
            </div>
        )
    }
    componentDidMount(){
        axios.get("/ajax/cinemaDetail?cinemaId=26195")
        .then(({data})=>{
            var aa = data.dealList.divideDealList
            console.log(aa)
            this.setState({
                // curNumberDesc:aa.curNumberDesc,
                // price:aa.price,
                // title:aa.title,
               
                dealList:aa
            })
        })
    }
}
export default Eat
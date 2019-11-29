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
                  
                    <div key={index} className="item_eat">
                         <img className="im" src={v.imageUrl.replace("w.h","440.0")}/>
                        <div class>{v.title}</div>
                        <div>{v.price}</div>
                        <div>{v.curNumberDesc}</div>
                       
                    </div>
                    
                    
                ))

            }
                 
            </div>
        )
    }
    componentDidMount(){
        axios.get("/ajax/cinemaDetail?cinemaId=26195")
        .then(({data})=>{
            var aa = data.dealList.dealList
            console.log(aa.imageUrl)
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
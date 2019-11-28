import React from "react"
import axios from "axios"
import "../../assets/css/city/citylist.css"



class Choose extends React.Component{
    constructor(){
        super();
        this.state={
            cityList:[]
        }
    }
   
    render(){
        return(
            <div className="city_body">
              {
                  this.state.cityList?
                  this.state.cityList.map(v=>(
                      <div className="aa" key={v.id}>
                        <h3 className="city_list_name_item " key={v.id}>{v.nm}</h3>
                      </div>
                      )):null
              }
                
             
            </div>
        )
    }
    componentDidMount(){
    axios.get("/dianying/cities.json")
    .then(({data})=>{
             this.setState({
                cityList:data.cts
            })
            console.log(222,data.cts)
            })
    }
}
export default Choose


//    // console.log(city)
          
            // var  citylist
            // for(var i=0;i<city.length;i++){
            //    var letterFirst = city[i].py.substr(0,1).toUpperCase();
            //     for(var k=0;k<citylist.length;k++){
            //         if(letterFirst == citylist[k].index){
            //             citylist[k].list.push({cityId:"city[i].id",cityName:"city[i].nm"})
            //             break
            //         }else{
            //             citylist.push({index:letterFirst,list:[{cityId:"city[i].id",cityName:"city[i].nm"}]})
            //         }
            //     }
               
        //    }
        //   function iscitylist(letterFirst){
        //        var bStop = false;
        //        for (var i=0;i<citylist.length;i++){
        //            if(citylist[i].index == letterFirst){
        //             bStop  = true;
        //             break;
        //            }
        //        } 
        //        return bStop;
        //     }
        //    console.log(this.state.city)
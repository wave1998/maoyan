import React from 'react';
import axios from 'axios';



export default class MySwiper extends React.Component{
    render() {



        return (
            <div  className={"most-expected"}>
                <p className={"title"}>近期最受期待</p>
                <div className="most-expected-list">
                    
                <div className = {"expected-item "}>
                   
                    <div className={"poster"}>1<img/></div>
                    <div className={"name"}>yueza</div>
                    <div className={"date"}>2019.11.27</div>
                </div>
                <div className = {"expected-item "}>
                   
                   <div className={"poster"}>2<img/></div>
                   <div className={"name"}>yueza</div>
                   <div className={"date"}>2019.11.27</div>
               </div>
               <div className = {"expected-item swiper-wrapper"}>
                   
                   <div className={"poster"}>2<img/></div>
                   <div className={"name"}>yueza</div>
                   <div className={"date"}>2019.11.27</div>
               </div>
               <div className = {"expected-item swiper-wrapper"}>
                   
                   <div className={"poster"}>2<img/></div>
                   <div className={"name"}>yueza</div>
                   <div className={"date"}>2019.11.27</div>
               </div>
               <div className = {"expected-item swiper-wrapper"}>
                   
                   <div className={"poster"}>2<img/></div>
                   <div className={"name"}>yueza</div>
                   <div className={"date"}>2019.11.27</div>
               </div>
               <div className = {"expected-item swiper-wrapper"}>
                   
                   <div className={"poster"}>2<img/></div>
                   <div className={"name"}>yueza</div>
                   <div className={"date"}>2019.11.27</div>
               </div>
                </div>
                </div>
           

        )
    }
    async componentDidMount() {
        const {data} = await axios.get("/ajax/comingList")
        console.log(data)
        this.setState({
           
        })
    }
}
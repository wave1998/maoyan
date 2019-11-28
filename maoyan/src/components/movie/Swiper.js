import React from 'react';
import axios from 'axios';



export default class MySwiper extends React.Component{
    constructor(){
        super();
        this.state={
           expectMovieList:[],
        }
    }
    render() {
        return (
            
            <div  className={"most-expected"}>
                <p className={"title"}>近期最受期待</p>
              
                <div className="most-expected-list" > 
                 {this.state.expectMovieList?
                this.state.expectMovieList.map(v =>
                <div className = {"expected-item "} key={v.id}>
            
                    <div className={"poster"}>
                        <img src={v.img.replace("w.h","170.230")}/>
                    </div>
                    <div className={"name"}>{v.nm}</div>
                    <div className={"date"}>{v.comingTitle}</div>
                </div>):null}
                </div>
                </div>
        )
    }
    async componentDidMount() {
        const {data} = await axios.get("/ajax/mostExpected?ci=238&limit=10&offset=0&token=")
        console.log(data.coming)
        this.setState({
            expectMovieList:data.coming,
        })
    }
}
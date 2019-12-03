import React from 'react'
import axios from 'axios'
import '../../../assets/css/cinema/navWrap/allCity.css'
import {withRouter} from 'react-router-dom'
import store from '../../../store'
class AllCity extends React.Component{
    constructor(){
        super();
        this.state={
            districtSubItems:[],
            districtSubItems2:[],
            subwaySubItems:[],
            subwaySubItems2:[],
            chosen:0,
            chosen2:0,
            allCityTab:0,
            cityId:store.getState().cinema.presentCityId,
            districtId:store.getState().cinema.districtId,
            areaId:store.getState().cinema.areaId,
            lineId:store.getState().cinema.lineId,
            stationId:store.getState().cinema.stationId,
        }
    }
    render() {
        return (
            <div className={"allCity-content"}>
                <ul className={"allCity-tab"}>
                    <li className={this.state.allCityTab===0?"chosen":""} onClick={()=>this.setState({allCityTab:0,chosen:0,chosen2:0})}>商区</li>
                    <li className={this.state.allCityTab===1?"chosen":""} onClick={()=>this.setState({allCityTab:1,chosen:0,chosen2:0})}>地铁站</li>
                </ul>


                <div className={"region-list"} style={this.state.allCityTab===1?{display:"none"}:{display:"block"}}>
                    <div className={"region-sidenav"}>
                        <div className={"district"}>
                            {
                                this.state.districtSubItems.length>=1?
                                    this.state.districtSubItems.map((v,index)=>
                                        <div className={this.state.chosen===index?"district-li chosen":"district-li"}
                                             key={v.id}
                                             onClick={this.changeDistrict.bind(this,index,v.id)}
                                        >{v.name}({v.count})</div>
                                    ):null
                            }
                        </div>
                    </div>
                    <div className={"region-list-item"}>
                        <div className={"filter-list"}>
                            {
                                this.state.districtSubItems2?
                                this.state.districtSubItems2.length>=1?
                                    this.state.districtSubItems2.map((v,index)=>
                                        <div className={this.state.chosen2===index?"item chosen":"item"}
                                             key={v.id}
                                             onClick={this.changeArea.bind(this,index,v.id)}>
                                            <span className={"item-name"}>{v.name}</span>
                                            <span className={"item-count"}>{v.count}</span>
                                        </div>
                                    ):null:null
                            }
                        </div>
                    </div>
                </div>


                <div className={"region-list"} style={this.state.allCityTab===0?{display:"none"}:{display:"block"}}>
                    <div className={"region-sidenav"}>
                        <div className={"district"}>
                            {
                                this.state.subwaySubItems.length>=1?
                                    this.state.subwaySubItems.map((v,index)=>
                                        <div className={this.state.chosen===index?"district-li chosen":"district-li"}
                                             key={v.id}
                                             onClick={this.changeLine.bind(this,index,v.id)}
                                        >{v.name}({v.count})</div>
                                    ):null
                            }
                        </div>
                    </div>
                    <div className={"region-list-item"}>
                        <div className={"filter-list"}>
                            {
                                this.state.subwaySubItems2.length>=1?
                                    this.state.subwaySubItems2.map((v,index)=>
                                        <div className={this.state.chosen2===index?"item chosen":"item"}
                                             onClick={this.changeStation.bind(this,index,v.id)}
                                            key={v.id}>
                                            <span className={"item-name"}>{v.name}</span>
                                            <span className={"item-count"}>{v.count}</span>
                                        </div>
                                    ):null
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }


    // 区域改变
    changeDistrict(index,districtId){
        this.setState({
            chosen:index,
            districtSubItems2:this.state.districtSubItems[index].subItems,
            // subwaySubItems2:this.state.subwaySubItems[index].subItems,
        })
        store.dispatch({
            type:"CHANGE_DISTRICT",
            payload:{
                districtId,
            }
        })
        console.log(store.getState().cinema.districtId)
    }
    changeArea(index,areaId){
        this.setState({
            chosen2:index,
        })
        store.dispatch({
            type:"CHANGE_AREAS",
            payload:{
                areaId,
            }
        })
        // console.log(this.props.cinemaThis,this)
        // this.props.cinemaThis.forceUpdate();//强制刷新
    }

        // 地铁路线改变
    changeLine(index,lineId){
        this.setState({
            chosen:index,
            // districtSubItems2:this.state.districtSubItems[index].subItems,
            subwaySubItems2:this.state.subwaySubItems[index].subItems,
        })
        store.dispatch({
            type:"CHANGE_LINE",
            payload:{
                lineId,
            }
        })
        console.log(store.getState().cinema.districtId)
    }
    changeStation(index,stationId){
        this.setState({
            chosen2:index,
        })
        store.dispatch({
            type:"CHANGE_STATION",
            payload:{
                stationId,
            }
        })
        // console.log(this.props.cinemaThis,this)
        // this.props.cinemaThis.forceUpdate();//强制刷新
        // this.props.history.push("/movie")
    }



    async componentDidMount() {
        const {data} = await axios.get("/ajax/filterCinemas?ci="+this.state.cityId)
        this.setState({
            districtSubItems:data.district.subItems,
            subwaySubItems:data.subway.subItems
        });
    }
    // districtId:store.getState().cinema.districtId,
    // areaId:store.getState().cinema.areaId,
}
export default withRouter(AllCity);
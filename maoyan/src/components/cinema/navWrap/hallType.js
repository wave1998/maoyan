import React from 'react'
import axios from 'axios'
import '../../../assets/css/cinema/navWrap/hallType.css'
import store from '../../../store'
class HallType extends React.Component{
    constructor(){
        super()
        this.state={
            serviceSubItems:[],
            hallTypeSubItems:[],
            choseService:0,
            choseHallType:0,
        }
    }
    render() {
        return (
            <div className={"hallType-content"}>
                <div className={"special-content"}>
                    <div className={"special-service"}>
                        <h3 className={"item-title"}>特色功能</h3>
                        <div className={"item-list"}>
                            {
                                this.state.serviceSubItems?
                                    this.state.serviceSubItems.map((v,index)=>
                                        <div onClick={this.changeService.bind(this,index)}
                                            ref={this.state.choseService===index?"service":""}
                                            className={this.state.choseService===index?"item chosen":"item"}
                                            key={v.id}>{v.name}</div>
                                    ):null
                            }
                        </div>
                    </div>
                    <div className={"special-hallType"}>
                        <h3 className={"item-title"}>特殊厅</h3>
                        <div className={"item-list"}>
                            {
                                this.state.hallTypeSubItems?
                                    this.state.hallTypeSubItems.map((v,index)=>
                                        <div onClick={this.changeHallType.bind(this,index)}
                                            ref={this.state.choseHallType===index?"hallType":""}
                                            className={this.state.choseHallType===index?"item chosen":"item"}
                                            key={v.id}>{v.name}</div>
                                    ):null
                            }
                        </div>
                    </div>
                </div>
                <div className={"special-btn"}>
                    <span onClick={this.reset.bind(this)}
                        className={"btn cancel-btn"}>重置</span>
                    <span onClick={this.submit.bind(this)}
                        className={"btn confirm-btn"}>确定</span>
                </div>
            </div>
        )
    }
    changeService(index){
        this.setState({choseService:index})
    }
    changeHallType(index){
        this.setState({choseHallType:index})
    }
    reset(){
        this.setState({choseService:0,choseHallType:0})
    }
    submit(){
        const hallTypeId = this.state.hallTypeSubItems.find(v=>v.name===this.refs.hallType.innerText).id
        const serviceId = this.state.serviceSubItems.find(v=>v.name===this.refs.service.innerText).id
        store.dispatch({
            type:"CHANGE_HALLTYPE",
            payload:{
                hallTypeId,
                serviceId
            }
        })
        this.props.getCinemaList.call(this.props.cinemaThis);
        this.props.NavWrapThis.setState({
            allCity:false,
            closeTab:false,
        })
    }
    async componentDidMount() {
        const {data} = await axios.get("/ajax/filterCinemas",{
            params:{
                ci:store.getState().cinema.presentCityId
            }
        })
        this.setState({
            serviceSubItems:data.service.subItems,
            hallTypeSubItems:data.hallType.subItems,
        })
    }
}
export default HallType;
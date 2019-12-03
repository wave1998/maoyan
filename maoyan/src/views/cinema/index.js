import React from 'react';
import axios from 'axios'
import CommonHeader from '../../components/common/CommonHeader'
import CinemaList from "../../components/cinema/CinemaList";
import NavWrap from '../../components/cinema/NavWrap'
import "../../assets/css/cinema/cinema.css"
import store from '../../store'
export default class Cinema extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cinemaList:[],
            cityId:store.getState().cinema.presentCityId,
            cityName:store.getState().cinema.presentCityName,
            districtId:store.getState().cinema.districtId,
            lineId:store.getState().cinema.lineId,
            hallType:store.getState().cinema.hallType,
            brandId:store.getState().cinema.brandId,
            serviceId:store.getState().cinema.serviceId,
            areaId:store.getState().cinema.areaId,
            stationId:store.getState().cinema.stationId,
        }
    }
    render() {
        return (
            <div>
                <CommonHeader pageTitle={"影院"}></CommonHeader>
                <div className="cinema">
                    <div className="cinemaSearch">
                        <div className="gray-bg">
                            {/*下面这个div有一个点击事件，跳转到城市列表*/}
                            <div className="entry-city" onClick={()=>this.props.history.push("/location")}>
                                <span>{this.state.cityName}</span>
                                {/*<i className="yo-ico">&#xf033;</i>*/}
                            </div>
                            {/*下面这个点击跳转到搜索影院界面*/}
                            <div className="search-entry" onClick={()=>{this.props.history.push("/search")}}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=" alt=""/>
                                {"搜影院"}
                            </div>
                        </div>
                    </div>
                    <NavWrap getCinemaList={this.getCinemaList} cinemaThis={this}></NavWrap>
                    <div className="cinemaList">
                        <CinemaList cinemaList={this.state.cinemaList}></CinemaList>
                </div>
            </div>
            </div>
        )
    }



        // day=2019-12-03
        // &offset=0
    // &limit=20
    // &districtId=-1
    // &lineId=-1
    // &hallType=-1
    // &brandId=-1
    // &serviceId=-1
    // &areaId=-1
    // &stationId=-1
    // &item=
    // &updateShowDay=true
    // &reqId=1575358966441
        // &cityId=1
    async  getCinemaList(){
        const {data} =  await axios.get("/ajax/cinemaList",{
            params:{
                day:"2019-12-03",
                offset:0,
                limit:20,
                districtId:store.getState().cinema.districtId,
                lineId:store.getState().cinema.lineId,
                hallType:store.getState().cinema.hallType,
                brandId:store.getState().cinema.brandId,
                serviceId:store.getState().cinema.serviceId,
                areaId:store.getState().cinema.areaId,
                stationId:store.getState().cinema.stationId,
                updateShowDay:true,
                reqId:1575358966441,
                cityId: store.getState().cinema.presentCityId,
            }
        })
        this.setState({
            cinemaList:data.cinemas
        })
    }
    componentDidMount() {
        this.getCinemaList()
    }

}
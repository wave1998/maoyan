import React from 'react'
import axios from 'axios'
import '../../../assets/css/cinema/navWrap/allCity.css'
class AllCity extends React.Component{
    constructor(){
        super();
        this.state={
            districtSubItems:[],
            districtSubItems2:[],
            subwaySubItems:[],
            subwaySubItems2:[],
            chosen:0,
            allCityTab:0,
        }
    }
    render() {
        return (
            <div className={"allCity-content"}>
                <ul className={"allCity-tab"}>
                    <li className={this.state.allCityTab===0?"chosen":""} onClick={()=>this.setState({allCityTab:0})}>商区</li>
                    <li className={this.state.allCityTab===1?"chosen":""} onClick={()=>this.setState({allCityTab:1})}>地铁站</li>
                </ul>


                <div className={"region-list"} style={this.state.allCityTab===1?{display:"none"}:{display:"block"}}>
                    <div className={"region-sidenav"}>
                        <div className={"district"}>
                            {
                                this.state.districtSubItems.length>=1?
                                    this.state.districtSubItems.map((v,index)=>
                                        <div className={this.state.chosen===index?"district-li chosen":"district-li"}
                                             key={v.id}
                                             onClick={this.changeDistrict.bind(this,index)}
                                        >{v.name}({v.count})</div>
                                    ):null
                            }
                        </div>
                    </div>
                    <div className={"region-list-item"}>
                        <div className={"filter-list"}>
                            {
                                this.state.districtSubItems2?
                                    this.state.districtSubItems2.map(v=>
                                        <div className={"item"} key={v.id}>
                                            <span className={"item-name"}>{v.name}</span>
                                            <span className={"item-count"}>{v.count}</span>
                                        </div>
                                    ):null
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
                                             onClick={this.changeDistrict.bind(this,index)}
                                        >{v.name}({v.count})</div>
                                    ):null
                            }
                        </div>
                    </div>
                    <div className={"region-list-item"}>
                        <div className={"filter-list"}>
                            {
                                this.state.subwaySubItems2?
                                    this.state.subwaySubItems2.map(v=>
                                        <div className={"item"} key={v.id}>
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
    async componentDidMount() {
        const {data} = await axios.get("/ajax/filterCinemas?ci=1")
        console.log(data.district)
        console.log(data.subway)
        this.setState({
            districtSubItems:data.district.subItems,
            subwaySubItems:data.subway.subItems
        });
        console.log(this.state.districtSubItems[1].subItems)
    }
    changeDistrict(index){
        this.setState({
            chosen:index,
            districtSubItems2:this.state.districtSubItems[index].subItems,
            subwaySubItems2:this.state.subwaySubItems[index].subItems,
        })
    }
}
export default AllCity;
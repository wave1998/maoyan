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
            subwaySubItems2:[]
        }
    }
    render() {
        return (
            <div className={"allCity-content"}>
                <ul className={"allCity-tab"}>
                    <li>商区</li>
                    <li>地铁站</li>
                </ul>
                <div className={"region-list"}>
                    <div className={"region-sidenav"}>
                        <div className={"district"}>
                            {
                                this.state.districtSubItems?
                                    this.state.districtSubItems.map(v=>
                                        <div className={"district-li"} key={v.id}>{v.name}({v.count})</div>
                                    ):null
                            }
                        </div>
                    </div>
                    <div className={"region-list-item"}>
                        <div className={"filter-list"}>

                            {/*{*/}
                            {/*    this.state.districtSubItems?*/}
                            {/*        this.state.districtSubItems.map(v=>*/}
                            {/*            <div className={"item"} key={v.id}>*/}
                            {/*                <span className={"item-name"}>{v.name}</span>*/}
                            {/*                <span className={"item-count"}>{v.count}</span>*/}
                            {/*            </div>*/}
                            {/*        ):null*/}
                            {/*}*/}
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
        })
    }
}
export default AllCity;
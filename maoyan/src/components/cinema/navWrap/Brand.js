import React from 'react'
import "../../../assets/css/cinema/navWrap/brand.css"
import axios from 'axios'
import store from '../../../store'
class Brand extends React.Component{
    constructor(){
        super()
        this.state={
            brandSubItems:[],
            chosen:0,
        }
    }
    render() {
        return (
                <div className={"brand-content"}>
                    <div>
                        {
                            this.state.brandSubItems?
                                this.state.brandSubItems.map((v,index)=>
                                    <div onClick={this.changeBrand.bind(this,index,v.id)}
                                        className={this.state.chosen===index?"item chosen":"item"}
                                         key={v.id}>
                                        <span className={"brand-name"} style={{textAlign:"left"}}>{v.name}</span>
                                        <span className={"brand-count"}>{v.count}</span>
                                    </div>
                                ):null
                        }
                    </div>
                </div>
        )
    }
    changeBrand(index,brandId){
        this.setState({
            chosen:index,
        })
        store.dispatch({
            type:"CHANGE_BRAND",
            payload:{
                brandId,
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
            brandSubItems:data.brand.subItems
        })
    }
}
export default Brand;
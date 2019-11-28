import React from 'react'
import "../../../assets/css/cinema/navWrap/brand.css"
import axios from 'axios'
class Brand extends React.Component{
    constructor(){
        super()
        this.state={
            brandSubItems:[]
        }
    }
    render() {
        return (
                <div className={"brand-content"}>
                    <div>
                        {
                            this.state.brandSubItems?
                                this.state.brandSubItems.map(v=>
                                    <div className={"item"} key={v.id}>
                                        <span className={"brand-name"} style={{textAlign:"left"}}>{v.name}</span>
                                        <span className={"brand-count"}>{v.count}</span>
                                    </div>
                                ) :null
                        }
                    </div>
                </div>
        )
    }
    async componentDidMount() {
        const {data} = await axios.get("/ajax/filterCinemas?ci=1")
        console.log(data.brand.subItems)
        this.setState({
            brandSubItems:data.brand.subItems
        })
    }
}
export default Brand;
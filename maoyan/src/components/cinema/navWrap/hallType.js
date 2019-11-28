import React from 'react'
import "../../../assets/css/cinema/navWrap/brand.css"
import axios from 'axios'
class HallType extends React.Component{
    constructor(){
        super()
        this.state={
            serviceSubItems:[],
            hallTypeSubItems:[],
        }
    }
    render() {
        return (
            <div className={"brand-content"}>
                <div>
                    tese
                </div>
            </div>
        )
    }
    async componentDidMount() {
        const {data} = await axios.get("/ajax/filterCinemas?ci=1")
        console.log(data.service)
        console.log(data.hallType)
        this.setState({
            serviceSubItems:data.service.subItems,
            hallTypeSubItems:data.hallType.subItems,
        })
    }
}
export default HallType;
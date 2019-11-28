import React from 'react'
import axios from 'axios'
import '../../../assets/css/cinema/navWrap/hallType.css'
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
            <div className={"hallType-content"}>
                <div className={"special-content"}>
                    <div className={"special-service"}>
                        <h3 className={"item-title"}>特色功能</h3>
                        <div className={"item-list"}>
                            {
                                this.state.serviceSubItems?
                                    this.state.serviceSubItems.map(v=>
                                        <div className={"item"} key={v.id}>{v.name}</div>
                                    ):null
                            }

                        </div>
                    </div>
                    <div className={"special-hallType"}>
                        <h3 className={"item-title"}>特殊厅</h3>
                        <div className={"item-list"}>
                            {
                                this.state.hallTypeSubItems?
                                    this.state.hallTypeSubItems.map(v=>
                                        <div className={"item"} key={v.id}>{v.name}</div>
                                    ):null
                            }
                        </div>
                    </div>
                </div>
                <div className={"special-btn"}>
                    <span className={"btn cancel-btn"}>重置</span>
                    <span className={"btn confirm-btn"}>确定</span>
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
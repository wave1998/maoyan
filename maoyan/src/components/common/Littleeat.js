import React, {Fragment} from "react"
import axios from "axios"
import "../../assets/css/eat/eat.css"

export default class LittleEat extends React.Component {
    constructor() {
        super();
        this.state = {
            dealList: []
        }
    }
    render() {
        return (
            <div className="little_eat">

                <p className="P1">影院超值套餐</p>
                {
                    this.state.dealList.length>=1?
                    this.state.dealList.map((v,index) => (
                        v.dealList.map(k =>
                            <div key={k.dealId} className="item_eat">
                                <img className="im" src={k.imageUrl.replace("w.h", "440.0")}/>
                                <div className="item-info">
                                    <div className="first">{k.titleTag} </div>
                                    <div className="secound">{k.secondTitle}</div>
                                    <div className="third">{"￥" + k.price}</div>
                                    <div className="fourth">{k.curNumberDesc}</div>
                                    <div className="five">去购买</div>
                                </div>
                               
                            </div>)
                    )):null
                }
            </div>
        )
    }

    async componentDidMount() {
        const {data} = await axios.get("/ajax/cinemaDetail?cinemaId=" + this.props.cinemaId)
        this.setState({
            dealList: data.dealList.divideDealList
        })
    }
}

 
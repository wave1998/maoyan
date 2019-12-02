import React from 'react';
import axios from 'axios'
import "../../assets/css/search/search.css"
import "../../assets/css/cinema/cinemaList.css"
import DetailHeader from '../../components/common/DetailHeader'

// import DatePicker from 'antd/es/date-picker'; // 加载 JS
// import 'antd/es/date-picker/style/css'; // 加载 CSS

function debounce(fn) {
    let timeoutId
    return function () {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn.apply(this, arguments)
        }, 1000)
    }
}

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            cinemaValue: "",
            list: [],
            lists:[]
        }
        this.abc = debounce(this.abc)
    }


    render() {
        return (
            <div className="search">

                <DetailHeader></DetailHeader>
                <div className="but">
                    <input type="text" className="but1" value={this.state.cinemaValue} placeholder="搜影院" onChange={(e) => { this.fn(e) }} />
                    <span onClick={() => { this.props.history.push("/cinema") }}>取消</span>
                </div>
                {this.state.list ?
                    this.state.list.map((v, index) => (
                        <div key={index} className="item" >
                            <div className="title-block">

                                < div className="title-label">
                                    <div className="title-label  yh-1">
                                        <span className="yh">{v.nm}</span>
                                        <span>
                                            <span className="price">{v.sellPrice}</span>
                                            <span className="q">元起</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="location-block line-ellipsis">
                                    <div className={"line-ellipsis"} style={{ flex: 1, width: "80%" }}>{v.addr}</div>
                                    <div className="distance">{v.distance}</div>
                                </div>
                                <div className="label-block">
                                    {v.allowRefund === 1 ? <div className="allowRefund">退</div> : null}
                                    {v.endorse === 1 ? <div className="endorse">改签</div> : null}
                                    {v.snack === 1 ? <div className="snack">小吃</div> : null}
                                    {v.vipTag ? <div className="vipTag">{v.tag.vipTag}</div> : null}

                                </div>
                            </div>
                        </div>
                    )) : null
                }
                {this.state.lists ?
                    this.state.lists.map((v, index) => (
                        <div key={index} className="item" >
                            <div className="title-block">

                                < div className="title-label">
                                    <div className="title-label  yh-1">
                                        <span className="yh">{v.nm}</span>
                                        <span>
                                            <span className="price">{v.sc}评分</span>
                                 
                                        </span>
                                    </div>
                                </div>
                                <div className="location-block line-ellipsis">
                                    <div className={"line-ellipsis"} style={{ flex: 1, width: "80%" }}>{v.addr}</div>
                                    <div className="distance">
                                  
                                        <img src={v.img.replace("w.h","60.90")} alt=""/>
                                    </div>
                                </div>
                                <div className="label-block">
                                    {v.allowRefund === 1 ? <div className="allowRefund">退</div> : null}
                                    {v.endorse === 1 ? <div className="endorse">改签</div> : null}
                                    {v.snack === 1 ? <div className="snack">小吃</div> : null}
                                    {v.vipTag ? <div className="vipTag">{v.tag.vipTag}</div> : null}

                                </div>
                            </div>
                        </div>
                    )) : null
                }



            </div>
        )
        // `${}`
    }



    fn(e) {
        this.setState({
            cinemaValue: e.target.value
        })
        this.abc(e.target.value)

    }
    abc = (e) => {
        axios.get(`/ajax/search?kw=${e}&cityId=1&stype=-1`)
            .then(({ data }) => {
                if (data.cinemas || data.movies) {
                    console.log(data)
                    this.setState({
                        list: data.cinemas?data.cinemas.list:null,
                        lists: data.movies?data.movies.list:null
                    })
                }

            })
    }
}




    // axios.get("/ajax/search?kw=大&cityId=1&stype=2")
    // .then(({data})=>{
    //     console.log(data.cinemas)
    //     this.setState({

    //     })
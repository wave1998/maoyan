// import Taro from '@tarojs/taro'
// import { divView, Text } from '@tarojs/components'
import React, { Component } from 'react';
import '../../assets/css/cinema/seat.css'
import axios from "axios"
import DetailHeader from "../../components/common/DetailHeader";
export default class Seat extends Component {
    config = {
        enablePullDownRefresh: false
    }
    constructor(props) {
        super(props);
        this.state = {
            seatData: {},
            statusMap: {
                can: "https://p1.meituan.net/movie/9dfff6fd525a7119d44e5734ab0e9fb41244.png",
                No: "https://p1.meituan.net/movie/bdb0531259ae1188b9398520f9692cbd1249.png",
                select: "https://p0.meituan.net/movie/585588bd86828ed54eed828dcb89bfdd1401.png"
            },
            active: '0',
            seatArray: [],
            buySeat: [],
            selectSeat: []
        }

    }
    async initParams() {
        const params = this.props.match.params;//路由过来的参数
        const data = await axios.post("/ajax/seatingPlan?timestamp=${Date.now()}", {
            cityId: params.cityId,
            ci: params.ci,
            seqNo: params.seqNo
        })
        console.log(data.data.seatData);
        if (data.status === 200) {
            const seatData = data.data.seatData;
            const seatArray = [];
            // console.log(seatData.seat.regions[0].rows);
            seatData.seat.regions[0].rows.map(item => {
                let arr = [];
                item["seats"].map(seat => {
                    if (seat["seatType"] === "N") {
                        arr.push('0');
                    } else {
                        arr.push('2')
                    }
                })
                seatArray.push(arr);
            })
            this.setState({
                seatData: seatData,
                seatArray: seatArray,
                selectSeat: seatData.seat.regions[0].rows
            });
            console.log(this.state.seatData.movie);
            // console.log(this.state.seatData.seat.recommendation.bestRecommendation);
            // console.log(this.state.seatData.seat.image.seatLegends);
        }
    }
    //初始化this.state
    selectSeat(row, column, item) {
        const self = this;
        const arr = this.state.seatArray;
        if (item === "0") {
            if (self.state.buySeat.length === 4) {
                alert("最多选择4个座位")
                return false;
            } else {
                let buySeat = self.state.buySeat;
                arr[row][column] = 'E';
                buySeat.push({
                    "row": row,
                    "column": column
                });
                self.setState({
                    buySeat: buySeat,
                    seatArray: arr,
                });
                console.log(this.state.buySeat);
            }
        } else if (item === "E") {
            let buySeat = self.state.buySeat;
            console.log(row, column)
            arr[row][column] = '0';
            let tmpArr = this.state.buySeat;
            buySeat.map((value, index) => {
                if (value["row"] === row && value["column"] === column) {
                    tmpArr.splice(index, 1);
                    self.setState({
                        buySeat: tmpArr,
                        // seatArray:arr
                    })
                }
            })
            console.log(this.state.buySeat);
        }
    }
    selectAll(seats) {
        const self = this;
        console.log(seats, this);
        seats.map(item => {
            //   console.log('123');
            let row = parseInt(item.rowId.split('0')[0]);
            let column = parseInt(item.columnId.split('0')[0]);
            let itemIndex = self.state.seatArray[row][column];
            console.log(itemIndex);
            self.selectSeat(row, column, itemIndex);
        })
    }
    getRecomment(recomment, num) {
        switch (num) {
            case 1: this.selectAll(recomment.bestOne.seats); break;
            case 2: this.selectAll(recomment.bestTwo.seats); break;
            case 3: this.selectAll(recomment.bestThree.seats); break;
            case 4: this.selectAll(recomment.bestFour.seats); break;
        }
    }
    componentDidMount() {
        this.initParams();
    }
    render() {
        const seatTypeList = this.state.seatData.seat ? this.state.seatData.seat.image.seatLegends : [];
        const seatMap = this.state.statusMap;
        const seatArray = this.state.seatArray;
        const recomment = this.state.seatData.seat ? this.state.seatData.seat.recommendation.bestRecommendation : {};
        const price = this.state.seatData.price ? Math.floor(this.state.seatData.price[1].seatsPriceDetail[1].originPrice) : [];
        return (
            <div className="selectSeat">
                <DetailHeader></DetailHeader>

                <div className="movieTitle">
                    {
                        this.state.seatData.movie ? this.state.seatData.movie.movieName : null
                    }
                </div>
                <div className="desc">
                    <div className="time">
                        {
                            this.state.seatData.show ? this.state.seatData.show.showDate : null
                        }
                    </div>
                    <div className="lang">
                        <div className="language">
                            {
                                this.state.seatData.show ? this.state.seatData.show.lang : null
                            }
                        </div>
                    </div>
                </div>
                {/*<div className="header">
                    <div className="title">
                        {
                            this.state.seatData.movie ? this.state.seatData.movie.movieName : null
                        }
                    </div>
                    <div className="desc">
                        <div className="time">
                            {
                                this.state.seatData.show ? this.state.seatData.show.showDate : null
                            }
                        </div>
                        <div className="lang">
                            <div className="language">
                                {
                                    this.state.seatData.show ? this.state.seatData.show.lang : null
                                }
                            </div>
                        </div>
                    </div>
                </div>*/}
                <div className="seatCon">
                    <div className="hallCon">
                        <div className="hallName">
                            {
                                this.state.seatData.hall ? this.state.seatData.hall.hallName : null
                            }
                        </div>
                    </div>
                    <div className="seatMore">
                        <div className="rowList" style={{ color: "black" }}>
                            {
                                this.state.selectSeat.map((item, index) => {
                                    return (
                                        <div className="numberId" key={index}>{index + 1}</div>
                                    )
                                })
                            }
                        </div>
                        <div className="Container">
                            {
                                Object.keys(seatArray).map(key => {
                                    return (
                                        <div className="rowWrap" key={key}>
                                            {
                                                seatArray[key].map((item, index) => {
                                                    return (
                                                        <div className="seatWrap" key={index}>
                                                            {item === '0' ? <img src={seatMap.can} onClick={this.selectSeat.bind(this, key, index, item)}></img> : (item === 'E' ? <img src={seatMap.select} onClick={this.selectSeat.bind(this, key, index, item)}></img> : null)}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="type">
                    {
                        seatTypeList.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <img src={item.legendIcon}></img>
                                    <span className="word">{item.legendName}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="comment">
                    <div className="title">推荐</div>
                    <div className="btn" className={this.state.buySeat.length === 0 ? 'btn' : 'hide btn'}>
                        <div className="btnItem" onClick={this.getRecomment.bind(this, recomment, 1)}>1人</div>
                        <div className="btnItem" onClick={this.getRecomment.bind(this, recomment, 2)}>2人</div>
                        <div className="btnItem" onClick={this.getRecomment.bind(this, recomment, 3)}>3人</div>
                        <div className="btnItem" onClick={this.getRecomment.bind(this, recomment, 4)}>4人</div>
                    </div>
                     {/*<div className={this.state.buySeat.length == 0?'btn hide':'btn'}>
            {
              this.state.buySeat.map((item,index)=>{
                return (
                  <div className="btnItem" key={index} onClick={this.deleteBuy.bind(this,item)}>
                    {(item.row)*1+1}排{item.column}座
                  </div>
                )
              })
            }
          </div>*/}
                </div>
                <div className={this.state.buySeat.length === 0 ? 'buyBtn' : 'hide buyBtn'}>请先选座</div>
                <div className={this.state.buySeat.length === 0 ? 'hide buyBtn' : 'buyBtn active'}>￥{this.state.buySeat.length * price} 确认选座</div>
            </div>
        );
    }
}
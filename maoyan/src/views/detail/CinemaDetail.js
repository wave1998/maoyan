import React from 'react';
import axios from 'axios'
import Swiper from "swiper/js/swiper.js";
import 'swiper/css/swiper.min.css'
import DetailHeader from "../../components/common/DetailHeader";
import '../../assets/css/detail/cinemaDetail.css'
import LittleEat from "../../components/common/LittleEat";

export default class CinemaDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cinemaId: this.props.match.params.cinemaId,
            moviesList: [],
            pageTitle: "",
            cinemaAddr: "",
            showDate: [],
            imgId: 1,
            showDateActive: 0,
            plist: [],
        }
    }

    render() {
        return (
            <div className={"cinemaDetail"}>
                <DetailHeader pageTitle={this.state.pageTitle}></DetailHeader>
                <div className="cinema-info">
                    <div className="title line-ellipsis">{this.state.pageTitle}</div>
                    <div className="location line-ellipsis">{this.state.cinemaAddr}</div>
                    <div className="location-icon" data-bid="dp_wx_cinema_map">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAsCAYAAADmZKH2AAAAAXNSR0IArs4
                        c6QAACAVJREFUWAm1mQtsVEUXx8/cpYCiFPFZjW+UaARNEL+IUYMVQbCo3UJbQ
                        UV8JKDRfCq+jdWIRo3GGBMfiKJY2wItggj4Csa3+AxGRRNFUT/8olbbQogtu+Pv3O2
                        Mt7t32y2lk5RzZs5j/nPmzJm5i5E+tFnL7bC2lIyQlJSIlRJrZG8j8qexssUEsmW3AfLdc+
                        Xmj52dAl+9a9OW2GNtSsoAMgXLcdZKIq8HIxag620gqxJGVi2dbj7PqxsjKBgcoE5Kp2U+Y
                        M6M8VPQkDHyHmBvXVZt3izEoEdwgBqRSsmDOJua7ZDJUmznBjHyM/RXnP2eNjIcegD9g9A/
                        3ooUxdi9HgRyLZH8IlsW7XcLDmBTiFYt0Sp2Rhh0AKaJsZWJhKxlgmYny6YzVtuh7VvlrFRay
                        ojYdIAOdjosbDs+LmuqNi+4sWwaC85aa5JL5FaTljtxGKgRimn+qSUONY1J8322o576LPSgdE
                        puQ+/SaDQDIw9yeG5kkalsH7HgkvX2XlZ1k1NG6fsgIcneJrSzj9LKent0h0gj236cG8f/gs
                        Zqc4XrO5oDrrzOXoCw1isYeZX8qO5u+5xuofTCV+yQbc2yCP0KZ0P0rmmsNI+4vtIu4FjV2B
                        1W3nK5QV68OKpSkjWGDe6HlqyzC5lrdgiEw0UQziYIr7mpwnzSjubZDhFVDpMW1Bt230tm9h
                        cwnZNUmQN5R3nSKMHhe4rcHKh9bR7ctAapRGGUDhKxFlSmLp5otmm/vxpRaufElzPfrzoH8x8
                        CQJ974baCVlF/iXCkKqF8R2OVuUv5nhq2emOcx41xArr78Pcn/JcmISsbK8zHPdmrPNlgr7Rp
                        ebRTdwuAjwT49gE6gOCcCLDmwUPl4U7FvGRmoy3Z3iGPUqDLQyXywTcr5fi8nVP/BhPMbagy33
                        pZDEM5WUBSz8PFoYhL8KmHcmG4rQxOjNg8VjvZtEb6OWxymR0NsE9ZUAZYjkZmAHkpB+yj8gY7
                        Po9KOKzby275gMCHeFzOTXDGbMkax8fRC5vsfrJDVjPxAU6Os1VaCvibBD+XGlDPXxhL/hnK7b
                        Bc65vTj6PYRuctrbE2MFV19rB2kU2hgZG20fvL8JrxenDjG8f/SSa8XKUkbCtgZiyrMquytYnWK
                        dwpSxg/sFO2lqvq7Gy9aL+83m5mSQfrmCmSsUFHkDkEoZKVD7oDpu839GaFuvwDyDlxwFTeVGneZ
                        VtmsABXIyf1GD2bKStqT3hGBiSuThg2ovCb4+NoW7uUAqhIZeh+0d2lrTrh08jIK8prYzu6jRwp9
                        XtGk4UbGRZwUjw4BC1OGEcBdpgfJ8qe74Yh39534i72bjBKjfzluxZw7E3B4CJbpAnnDpP3l4fxL
                        2WAgi9/C9ISrRLFAeH79xboCjTHC1H+ITJ4coTPy+Lf65EKm/IqZgT+3ai4Ai7bX7yBkSM8H8PsO
                        UheJ2J/q4hSciyVfXaMmh9CPpFQ+TJFCFd7YQwDID9/YOWXIJWQTyN642rW2fDWiIx59ulzTRtb85
                        QfSMsjPLEqfT/CcK1N4LA9x0aSDeEBWsFN8V1EJYdlwae5QereZ6Eh18yPCA5RAYNTeVe95JSyKZM
                        O5x7+GP3DnYztWgdojepGwBxBBE5DXubk0D+4L8dyE+Td1oo6O46a867aAKqVF8vwMKnpLPWOrMzz
                        fAzDBM0yQCYDaLMTA2Q8juenrTRCH4gBVtYdMPWD3fXOH3Q5+qkQHLmwyAlwfCrROcn14yivjY0Dh
                        8gYAC5mYfiNb8hXyEAZw0S+nMRpclcfhZ9znYyoPaM8Y5nG1up9GRZJnL7EkynnU9DpRikLOZxtVt
                        0T+NuHA9BMMn/FR/RKcuzrqG4+nmvradLhkk75eor7f5T34PSJ3sHXuXNA2ZjJ1VTr+v1FWdwknkj
                        +0ic39am+Vufz4LQTXQHRayniZVxfbX5SWX+0i5rs3lv/Fv2wLlH/2TsW5pybeI+BMg+F8H5li4s7j
                        Dyr3xZOvqvptnZ5Ap8O2FaCcWV0ji7g9BchkFxMPEmdsNCO59vigajBruLJ8ZsIQNL7MzIne5e6gFN
                        F8mwN0bvfGVEeruNtdoPr7wpK4b4UYPc6X8y3kNr6vOs7mgNOBaOmyy0Y/Fv70nJfRb29xBn1hXKlnY
                        dv3U7XXuMKnes6URoLroaPaAxm4uQNp8w+L+BkVbj+zlDsJ1AV64ha5qVi5CP9NOR08hjPbbHgVE0Ni
                        neT8wH4ifbVIT/ENJAr12q/t00fCdi/zCIzH+1Gvhk0RCYzz9Z8vno8iax2X4rs24Ab6Zxg9DhV/Coc
                        5/wy5HQc1dM+rZ6rTeRmN8aB+4n39KlNSfOjH4thegSnNp0A1wBwTMTH2mG7y3R9qUTGurCz1tnBbf+
                        XRdj5lwsTbmRhE1nY5i7KMZ2CwKnd7BV2z5btspyJSp0fjDcUiZyTXQJUrgui8q+APdnpQ9cP2kOm1J
                        UZ/60QkeWweXMuW1MjxCHR18hiJyN/RpPJHwLkdDemlIv8RFLhQ9goMP0ltLRQYOqn4Mipsmsk938p0
                        /o0Ck8dTvgpWO4pKZa7/9cqVyObD3CCSqOg8xC4a2mV3GkMr75etJ0Cp/6J1hlEpx6A+7r5iGoLff8d
                        gPNWPoMupsC+6HR6Q3canE7S+WPO4mge+smNfJAI5AISf5Mf6yXTJ3A6l5aKigbRbb6NPdtLo8V/ijw
                        0ej+Z392vB4Xg7DM4NwnbnOC785jiEfLNkycafpPue/sHSyPizI2qhfQAAAAASUVORK5CYII="/>
                    </div>
                </div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.moviesList.length >= 1 ?
                                this.state.moviesList.map((v, index) =>
                                    <div className="swiper-slide" key={v.id}>
                                        <img src={v.img.replace("w.h", "148.208")}
                                             className={this.state.imgId === index ? "choice" : null} alt=""/>
                                    </div>
                                ) : null
                        }
                    </div>
                </div>
                {
                    this.state.moviesList.length >= 1 ?
                        <div className="movie-info">
                            <div className="movie-title line-ellipsis">
                                <span>{this.state.moviesList[this.state.imgId].nm}</span>
                                <span className="grade">
						<span>{this.state.moviesList[this.state.imgId].sc}
                            <span className="small">分</span>
						</span>

					</span>
                            </div>
                            <div className="movie-desc line-ellipsis">
                                {this.state.moviesList[this.state.imgId].desc}
                            </div>
                        </div> : null
                }
                <div className="nav-bar mb-line-b">
                    <div className="nav-bar-wrap">
                        {
                            this.state.showDate.length >= 1 ?
                                this.state.showDate.map((v, index) =>
                                    <div
                                        className={this.state.showDateActive === index ? "nav-item active" : "nav-item"}
                                        key={v.showDate}
                                        onClick={this.changeShowDate.bind(this, index)}>
                                        <span className="date-title">{v.dateShow}</span>
                                    </div>
                                ) : null
                        }
                    </div>
                </div>
                <div className={"seat-list"}>
                    <div className={"list-wrap"}>{
                        this.state.plist.length >= 1 ?
                            this.state.plist.map((v, index) =>
                                <div className="item-outer" key={index}>
                                    <div className="item">
                                        <div className="time-block">
                                            <div className="begin">{v.tm}</div>
                                            <div className="end">
                                                15:14
                                                <span className="tui">散场</span>
                                            </div>
                                        </div>
                                        <div className="info-block">
                                            <div className="lan">{v.lang}{v.tp}</div>
                                            <div className="hall">{v.th.replace("《会员首张免费》","")}</div>
                                        </div>
                                        <div className="price">
                                            <div className="sellPr">
                                                <span className="d">¥</span>
                                                <span>
                                                    <span className="stonefont">
                                                        {v.vipPrice/1+5}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="vipPrice">
                                                <span className="icon">{v.vipPriceName}</span>
                                                <span className="num">¥{v.vipPrice}</span>
                                            </div>
                                            <div className="extraDesc">{v.extraDesc}</div>
                                        </div>
                                        <div className="button-block">
                                            <div className="button">购票</div>
                                        </div>
                                    </div>
                                </div>) : null
                    }
                    </div>
                </div>
                <LittleEat cinemaId={this.state.cinemaId}></LittleEat>
            </div>
        )
    }

    async componentDidMount() {
        const {data} = await axios.get("/ajax/cinemaDetail", {
            params: {
                cinemaId: this.state.cinemaId
            }
        });
        this.setState({
            moviesList: data.showData.movies,
            pageTitle: data.cinemaData.nm,
            cinemaAddr: data.cinemaData.addr,
        })
        const that = this
        var mySwiper = new Swiper('.swiper-container', {
            _this: that,
            effect: 'coverflow',
            slidesPerView: 5,
            autoHeight: true,
            centeredSlides: true,
            slideToClickedSlide: true,
            coverflowEffect: {
                rotate: 0,
                stretch: -20,
                depth: 60,
                modifier: 1,
                slideShadows: false
            },
            on: {
                transitionEnd: function () {
                    const imgId = this.activeIndex;
                    that.changeClasName(imgId)
                    return imgId;
                },
            },
        })
    }

    changeClasName(imgId) {
        this.setState({
            imgId: imgId,
            showDate: this.state.moviesList[imgId].shows,
            showDateActive: 0,
            plist: this.state.moviesList[imgId].shows[0].plist,
        });
    }

    changeShowDate(index) {
        this.setState({
            showDateActive: index,
            plist: this.state.showDate[index / 1].plist
        })
    }
}
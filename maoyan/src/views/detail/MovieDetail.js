import React from 'react';
import axios from 'axios';
import '../../assets/css/detail/movieDetail.css';


export default class MovieDetail extends React.Component {
    constructor(){
        super();
        this.state={
            detailMovie:{},
            stagePhotos:[],
            
        }
    }
    render() {
        return (
<<<<<<< HEAD
            <div className="movie-page">
                <div className={"movie-info"} style={{backgroundColor:this.state.detailMovie.backgroundColor}}>
                <div className={"honour"}></div>
                    
                   
                    <div className={"movie-info-top"}>
                        <div className={"movie-cover"} >
                            <a src="" >电影图片
                <img className={"img noneBg poster "} src={this.state.detailMovie.img} alt="" />
                                <img className={"img noneBg poster-paly"} src="" alt="" />
=======
            <>
                <div className={"movie-info"}>
                    <div className={"honour"}></div>
                    <div className={"movie-info-top"}>
                        <div className={"movie-cover"}>
                            <a>电影图片
                                <img className={"img noneBg poster "} src="" alt=""/>
                                <img className={"img noneBg poster-paly"} src="" alt=""/>
>>>>>>> 323d4104bc1c4a41835935591621696734718f74
                            </a>
                        </div>
                        <div className={"movie-desc"}>
                        
                   
                            <div className={"movie-desc-top"}>
                              
                                    <div className={"movie-cn-name"}>{this.state.detailMovie.nm} </div>
                                    

                                
        <div className={"movie-en-name"}>{this.state.detailMovie.enm}</div>
                                <div className={"movie-other-info"}>
                                    <div className={"movie-type"}>
                                        <span className={"movie-cat"}>
                                        {this.state.detailMovie.cat}
                                       </span>
                                        <span className={"movie-tag"}>
                                            中国巨幕
<<<<<<< HEAD
                                               <img  className={"sd-imax"} src="" />
                                        </span>
                                    </div>

        <div className={"actors"}>{this.state.detailMovie.star}</div>
                                    <div className={"movie-show-time"}>
    <span >{this.state.detailMovie.pubDesc}/{this.state.detailMovie.dur}分钟</span>
                                        <img />
=======
                        <img className={"sd-imax"} src=""/>
                                        </span>
                                    </div>

                                    <div className={"actors"}>张占义、酥树呵</div>
                                    <div className={"movie-show-time"}>
                                        <span>2019-11-19上映/120分钟</span>
                                        <img/>
>>>>>>> 323d4104bc1c4a41835935591621696734718f74
                                    </div>
                                </div>
                            </div>


                            <div className={"btns"}>
                                <button className={"buttom"} type="primary">
                                    想看
<<<<<<< HEAD
                                   <img />
                                </button>
                                <button className={"buttom"} type="buttom">
                                    看过
                                  <img />
=======
                                    <img/>
                                </button>
                                <button className={"buttom"} type="buttom">
                                    看过
                                    <img/>
>>>>>>> 323d4104bc1c4a41835935591621696734718f74
                                </button>

                            </div>
                        </div>
<<<<<<< HEAD
=======

                    </div>

                </div>
                {/* 口碑 */}
                <div>
                    <div className={"real-time-word-of-mouth theater-chain-not-graded"}>
                        <div className={"top"}>
                            <div className={"left"}>
                                <img className={"img noneBg"} alt="logo" src=""/>
                                <span>实时口碑</span>
                            </div>
>>>>>>> 323d4104bc1c4a41835935591621696734718f74
                        </div>
   {/* 简介 */}
   <div className="brief-introduction">
                        <div className="title">
                            <span>简介</span>
                            <div>
                                <button type="button" className="open">
                                    <span>展开</span>
                                    <img className="img noneBg" alt="向下箭头" src=""/>
                                        </button>
                                        </div>
                                        </div>
                                        
                            
                                        <div data-bid="b_y93QJ" className="content ">
                                            <p id="brief-introduction-content" className="line-clamp">
                                               {this.state.detailMovie.dra}
                                                </p>
                                                </div>
                
            
                                                </div>

                    
               
                   {/*演职人员 */}

                    <div className={"actors"}>
                        <p className={"title"}>演职人员</p>

                        <div className="most-expected-list" >
                            <div className={"expected-item "} >

                                <div className={"poster videos-photos-list"}>
                                    <img src="" />
                                </div>
                                <div className={"name"}>刘浩然</div>
                                <div className={"date"}>饰 秦风</div>
                            </div>
                        </div>

                    </div>
<<<<<<< HEAD

                    {/* 视频剧照 */}
                    <div className={"most-expected"}>
                        <p className={"title"}>视频剧照</p>

                        <div className="videos-photos-list " >

                            <div className={".videos-photos-list-div"} >
=======
                </div>
                <div className={"brief-introduction"}>
                    <div className={"title"}>
                        <span>简介</span>
                        <div>
                            <button type="button" className={"open"}>
                                <span>展开</span>
                                <img className={"img noneBg"} alt="向下箭头" src=""/>>
                            </button>
                        </div>
                    </div>
                    <div className={"content "}>
                        <p className={"line-clamp"}>
                            超英（徐朝英 饰）翻盖新房，占义（张占义 饰）、树河（宿树河 饰）前来帮忙，没想到树河却因意外车祸入院，司机肇事逃逸，超英和占义化身“平原侦探”，踏上了一段令人啼笑皆非的荒诞追凶之旅。
                        </p>
                    </div>
                </div>
                <div className={"actors"}>
                    <div className={"title"}>
                        <span>演职人员</span>
                        <a className={"go-to-all-actors"} href="">
                            <span>全部</span>
                            <img className={"img noneBg"} alt="" src=""/>
                        </a>
                    </div>
                    <div className={"actor-list"}>
                        <ul>
                            <li className="left-margin">
                                <a href="">
                                    <img className={"img noneBg"} alt="avatar" src="_1c" width="80" height="112" e="1"
                                         c="1"/>
                                    <span className={"name"}>徐磊</span>
                                    <span className={"role"}>导演</span>
                                </a>
                            </li>
                            <li className="left-margin">
                                <a href="">
                                    <img className={"img noneBg"} alt="avatar" src="_1c" width="80" height="112" e="1"
                                         c="1"/>
                                    <span className={"name"}>徐磊</span>
                                    <span className={"role"}>导演</span>
                                </a>
                            </li>
                            <li className="left-margin">
                                <a href="">
                                    <img className={"img noneBg"} alt="avatar" src="_1c" width="80" height="112" e="1"
                                         c="1"/>
                                    <span className={"name"}>徐磊</span>
                                    <span className={"role"}>导演</span>
                                </a>
                            </li>
                            <li className="left-margin">
                                <a href="">
                                    <img className={"img noneBg"} alt="avatar" src="_1c" width="80" height="112" e="1"
                                         c="1"/>
                                    <span className={"name"}>徐磊</span>
                                    <span className={"role"}>导演</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                {/* 视频剧照 */}
                <div className={"most-expected"}>
                    <p className={"title"}>视频剧照</p>

                    <div className="most-expected-list">

                        <div className={"expected-item "}>

                            <div className={"poster"}>
                                图片
                                <img src=""/>
                            </div>
>>>>>>> 323d4104bc1c4a41835935591621696734718f74

                                
                                    
                                    {
                                    this.state.stagePhotos?
                                    this.state.stagePhotos.map((v,index)=>
                                    <div className={"videos-div-box"} key={index}>
                                        <img src={v.replace("/w.h","")} />
                                        </div>
                                        ):null
                                }
                        
                                

                            </div>
                        </div>
                    </div>
            
                    </div>
                     
                 
            </div>

<<<<<<< HEAD
                )
               
            }
    async componentDidMount() {
       
        const {data} = await axios.get("/ajax/detailmovie?movieId=1284949")
                console.log(data.detailMovie)
                this.setState({
                    detailMovie:data.detailMovie,
                    stagePhotos:data.detailMovie.photos,
                })
            }
=======
        )
    }

    async componentDidMount() {
        const {data} = await axios.get("/ajax/detailmovie?movieId=1284949")
        console.log(data.detailMovie)
    }
>>>>>>> 323d4104bc1c4a41835935591621696734718f74
}
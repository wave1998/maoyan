import React from 'react';
import axios from 'axios';
import '../../assets/css/detail/movieDetail.css';

export default class MovieDetail extends React.Component {
    render() {
        return (
            <>
                <div className="movie-info" >
                    <div className="honour"></div>
                    <div className="movie-info-top">
                        <div className="movie-cover">
                            <a >电影图片
                <img className="img noneBg poster " src="" alt="" />
                                <img className="img noneBg poster-paly" src="" alt="" />
                            </a>
                        </div>
                        <div className="movie-desc">
                            <div className="movie-desc-top">
                                <div className="movie-cn-name">平原上的夏洛克</div>
                                <div className="movie-en-name">Summer</div>

                                <div className="movie-other-info">
                                    <div className="movie-type">
                                        <span className="movie-cat">
                                            喜剧、悬疑
                        </span>
                                        <span className="movie-tag">
                                            中国巨幕
                        <img
                                                className="sd-imax"
                                                src="" />
                                        </span>
                                    </div>

                                    <div className="actors">张占义、酥树呵 </div>
                                    <div className="movie-show-time">
                                        <span >2019-11-19上映/120分钟</span>
                                        <img />
                                    </div>


                                </div>
                            </div>



                            <div className="btns">
                                <button className="buttom" type="primary">
                                    想看
                <img />
                                </button>
                                <button type="buttom">
                                    看过
            <img />
                                </button>

                            </div>
                        </div>

                    </div>

                </div>
                {/* 口碑 */}
                <div>
                    <div class="real-time-word-of-mouth theater-chain-not-graded">
                        <div class="top">
                            <div class="left">
                                <img class="img noneBg" alt="logo" src="" />
                    <span>实时口碑</span>
                            </div>
                        </div>
                        <div class="middle">
                            <span class="people-want-to-watch">11,383</span>
                            <span>人想看</span>
                        </div>
                        <div class="separator-line">
                        </div><div class="bottom">
                            <div class="left">
                                <span>想看人数超越91%的剧情片</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="brief-introduction">
                    <div class="title">
                        <span>简介</span>
                        <div>
                            <button type="button" class="open">
                                <span>展开</span>
                                <img class="img noneBg" alt="向下箭头" src="" />>
                                    </button>
                        </div>
                    </div>
                    <div data-bid="b_y93QJ" class="content ">
                        <p id="brief-introduction-content" class="line-clamp">
                            超英（徐朝英 饰）翻盖新房，占义（张占义 饰）、树河（宿树河 饰）前来帮忙，没想到树河却因意外车祸入院，司机肇事逃逸，超英和占义化身“平原侦探”，踏上了一段令人啼笑皆非的荒诞追凶之旅。
                                            </p>
                    </div>
                </div>
                <div class="actors">
                    <div class="title">
                        <span>演职人员</span>
                        <a class="go-to-all-actors" href="">
                            <span>全部</span>
                            <img class="img noneBg" alt="arrow-right" src=""/>>
                                </a>
                                </div>
                                <div class="actor-list">
                                    <ul>
                                        <li class="">
                                            <a data-bid="b_hxG9z" href="">
                                                <img class="img noneBg" alt="avatar" src="_1c" width="80" height="112" e="1" c="1"/>
                                                    <span class="name">徐磊</span>
                                                    <span class="role">导演</span>
                                                    </a>
                                                    </li><li class="left-margin">
                                                        <a data-bid="b_hxG9z" href="">
                                                            <img class="img noneBg" alt="avatar" src="" width="80" height="112" e="1" c="1"/>>
                                                                <span class="name">张占义</span>
                                                                <span class="role">饰 占义</span>
                                                                </a>
                                                                </li>
                                                                <li class="left-margin">
                                                                    <a data-bid="b_hxG9z" href="">
                                                                        <img class="img noneBg" alt="avatar" src="" width="80" height="112" e="1" c="1"/>>
                                                                            <span class="name">宿树河</span>
                                                                            <span class="role">饰 树河</span>
                                                                            </a>
                                                                            </li>
                                                                            <li class="left-margin">
                                                                                <a data-bid="b_hxG9z" href="">
                                                                                    <img class="img noneBg" alt="avatar" src="" width="80" height="112" e="1" c="1"/>>
                                                                                        <span class="name">徐朝英</span>
                                                                                        <span class="role">饰 超英</span>
                                                                                        </a>
                                                                                        </li>
                                                                                        </ul>
                                                                                        </div>
                            </div>
                            {/* 视频剧照 */}
                            <div  className={"most-expected"}>
                <p className={"title"}>视频剧照</p>
              
                <div className="most-expected-list" > 
                
                <div className = {"expected-item "} >
            
                    <div className={"poster"}>
                        图片
                        <img src=""/>
                    </div>
                    
                </div>
                </div>
                </div>
            </>

        )
    }
    async componentDidMount() {
        const { data } = await axios.get("/ajax/detailmovie?movieId=1284949")
        console.log(data.detailMovie)
    }
}
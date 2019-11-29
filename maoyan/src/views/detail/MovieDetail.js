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
            <div className="movie-page">
                <div className={"movie-info"} style={{backgroundColor:this.state.detailMovie.backgroundColor}}>
                <div className={"honour"}></div>
                    
                   
                    <div className={"movie-info-top"}>
                        <div className={"movie-cover"} >
                            <a src="" >电影图片
                <img className={"img noneBg poster "} src={this.state.detailMovie.img} alt="" />
                                <img className={"img noneBg poster-paly"} src="" alt="" />
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
                                               <img  className={"sd-imax"} src="" />
                                        </span>
                                    </div>

        <div className={"actors"}>{this.state.detailMovie.star}</div>
                                    <div className={"movie-show-time"}>
    <span >{this.state.detailMovie.pubDesc}/{this.state.detailMovie.dur}分钟</span>
                                        <img />
                                    </div>
                                </div>
                            </div>

                            <div className={"btns"}>
                                <button className={"buttom"} type="primary">
                                    想看
                                   <img />
                                </button>
                                <button className={"buttom"} type="buttom">
                                    看过
                                  <img />
                                </button>

                            </div>
                        </div>
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

                    {/* 视频剧照 */}
                    <div className={"most-expected"}>
                        <div className={"title"}>
                            <span>视频剧照</span>
                        <a class="go-to-all" href="//m.maoyan.com/movie/1277644/photos">
                                    <span>全部剧照</span>
                                    <img class="img noneBg" alt="arrow-right" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/arrow-right.png"/>
                                        </a>
                        </div>  
                        <div className="videos-photos-list " >

                            <div className={"videos-photos-list-div"} >
                          
                                
                                    
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
}
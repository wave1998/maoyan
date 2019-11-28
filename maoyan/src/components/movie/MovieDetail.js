import React from 'react'
import axios from 'axios'
import CommonHeader from "../common/CommonHeader";
import '../../assets/css/movieDetail/movieDetail.css'
class MovieDetail extends React.Component{
    constructor(){
        super()
        this.state={
            movieDetail:{}
        }
    }
    render() {
        const movieDetail = this.state.movieDetail
        return (
            <>
                <CommonHeader></CommonHeader>
                {this.state.movieDetail?
                <div className="movie-detail">
                    <div className="movie-filter"></div>
                    {/*下面这个div有一个背景图*/}
                    <div className="bg"></div>
                    <div className="detail-img">
                        <div className="poster">
                            {/*movieDetail.img | wh('148.208')*/}
                            <img src={movieDetail.albumImg} alt="电影封面请求有问题"/>
                        </div>
                        <div className="content">
                            <div className="title">{movieDetail.nm}</div>
                            <div className="title-en line-ellipsis">{movieDetail.enm}</div>
                            {/*movieDetail.sc.toFixed(1)*/}
                            <div className="score">
                            <span className="snum">
                                ({(movieDetail.snum / 10000).toFixed(1)}万人评)
                            </span>
                            </div>
                            <div className="type line-ellipsis">
                                <span>{movieDetail.cat}</span>
                            </div>
                            <div className="src line-ellipsis">{movieDetail.fra}/{movieDetail.dur}分钟></div>
                            <div className="pubDesc">{movieDetail.pubDesc}</div>

                        </div>
                    </div>
                </div>:null}
            </>
        )
    }
    async componentDidMount() {
        const {data} =  await axios.get("/ajax/detailmovie?movieId=247949")
        console.log(data.detailMovie)
        this.setState({
            movieDetail:data.detailMovie
        })
    }
}
export default MovieDetail
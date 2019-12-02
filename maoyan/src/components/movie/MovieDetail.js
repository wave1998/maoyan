import React from 'react'
import axios from 'axios'
import DetailHeader from "../common/DetailHeader";
import '../../assets/css/movieDetail/movieDetail.css'
import {withRouter} from 'react-router-dom';
import Advert from "../common/Advert";

class MovieDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieDetail: {},
            movieId: this.props.match.params.movieId
        }
    }

    render(props) {
        const movieDetail = this.state.movieDetail
        return (
            <><Advert ></Advert>
                <DetailHeader pageTitle={movieDetail.nm}></DetailHeader>
                {this.state.movieDetail.img ?
                    <div className="movie-detail">
                        <div className="movie-filter"></div>
                        <div className="bg"
                             style={{backgroundImage: "url(" + movieDetail.img.replace("w.h", "148.208") + ")"}}></div>
                        <div className="detail-img"
                             onClick={() => this.props.history.push("/moviedetail/" + movieDetail.id)}>
                            <div className="poster">
                                <img src={movieDetail.img.replace("w.h", "148.208")} alt="电影封面"/>
                            </div>
                            <div className="content">
                                <div className="title">{movieDetail.nm}</div>
                                <div className="title-en line-ellipsis">{movieDetail.enm}</div>
                                {
                                    movieDetail.sc !== 0 ?
                                        <div className="score">
                                            {movieDetail.sc.toFixed(1)}
                                            <span className="snum">
                                                ({(movieDetail.snum / 10000).toFixed(1)}万人评)
                                            </span>
                                        </div>
                                        :
                                        <div className="score">
                                            <span className="snum" style={{marginLeft:0}}>暂无评分</span>
                                        </div>
                                }
                                <div className="type line-ellipsis">
                                    <span>{movieDetail.cat}</span>
                                </div>
                                <div className="src line-ellipsis">{movieDetail.src}/{movieDetail.dur}分钟</div>
                                <div className="pubDesc">{movieDetail.pubDesc}</div>
                            </div>
                        </div>
                    </div> : null}
            </>
        )
    }

    async componentDidMount() {
        const {data} = await axios.get("/ajax/detailmovie", {
            params: {
                movieId: this.state.movieId
            }
        })
        console.log(data.detailMovie)
        this.setState({
            movieDetail: data.detailMovie
        })
    }
}

export default withRouter(MovieDetail)
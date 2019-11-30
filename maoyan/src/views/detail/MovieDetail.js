import React from "react";
import axios from "axios";
import "../../assets/css/detail/movieDetail.css";
import Discussion from "../../components/discussion/Discussion";

export default class MovieDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      detailMovie: {},
      stagePhotos: []
    };
  }
  render() {
    return this.state.detailMovie.img ? (
      <div className="movie-page">
        <div
          className={"movie-info"}
          style={{ backgroundColor: this.state.detailMovie.backgroundColor }}
        >
          <div className={"honour"} />

          <div className={"movie-info-top"}>
            <div className={"movie-cover"}>
              <a href="#">
                <img
                  className={"img noneBg poster "}
                  src={this.state.detailMovie.img.replace("w.h/", "")}
                  alt=""
                />
                <img className={"img noneBg poster-paly"} src="" alt="" />
              </a>
            </div>
            <div className={"movie-desc"}>
              <div className={"movie-desc-top"}>
                <div className={"movie-cn-name"}>
                  {this.state.detailMovie.nm}{" "}
                </div>

                <div className={"movie-en-name"}>
                  {this.state.detailMovie.enm}
                </div>
                <div className={"movie-other-info"}>
                  <div className={"movie-type"}>
                    <span className={"movie-cat"}>
                      {this.state.detailMovie.cat}
                    </span>
                    <span className={"movie-tag"}>
                      中国巨幕
                      <img className={"sd-imax"} src="" />
                    </span>
                  </div>

                  <div className={"actors"}>{this.state.detailMovie.star}</div>
                  <div className={"movie-show-time"}>
                    <span>
                      {this.state.detailMovie.pubDesc}/{this.state.detailMovie.dur}分钟
                    </span>
                    <img />
                  </div>
                </div>
              </div>

              <div className={"btns"}>
                <input className={"buttom"} type="button" value="想看" />

                <input className={"buttom"} type="button" value=" 看过" />
              </div>
            </div>
          </div>
          {/* 简介 */}
          <div className="brief-introduction">
            <div className="title">
              <span>简介</span>
            </div>

            <div data-bid="b_y93QJ" className="content ">
              <p id="brief-introduction-content" className="line-clamp">
                {this.state.detailMovie.dra}
              </p>
            </div>
          </div>

          {/* 视频剧照 */}
          <div className={"most-expected"}>
            <div className={"title"}>
              <span>视频剧照</span>
              <a
                className="go-to-all"
                href="//m.maoyan.com/movie/1277644/photos"
              >
                <span>全部剧照</span>
              </a>
            </div>
            <div className="videos-photos-list ">
              <div className={"videos-photos-list-div"}>
                {this.state.stagePhotos
                  ? this.state.stagePhotos.map((v, index) => (
                      <div className={"videos-div-box"} key={index}>
                        <img src={v.replace("/w.h", "")} />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
        <Discussion/>
      </div>
    ) : null;
  }
  async componentDidMount() {
    const { data } = await axios.get("/ajax/detailmovie?movieId=1284949");
    console.log(data.detailMovie);
    this.setState({
      detailMovie: data.detailMovie,
      stagePhotos: data.detailMovie.photos
    });
  }
}

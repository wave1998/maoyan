import React from "react";
import { Route,withRouter } from "react-router-dom";
import "../../assets/css/discussion/discussion2.css";
import axios from 'axios'

 class Discussion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    axios.get("",{
      params:{

      }
    })
  }
  enterDiscuss(){
    
  }

  render() {
    return (
      <section className="discussion">
        <header>
          <span className="title">讨论</span>
        </header>
        <div className="comments">
          <article  className="no-padding-top">
            <div>
              <img
                className="img noneBg avatar"
                alt="avatar"
                src="//p1.meituan.net/avatar/40063277c1b776b75035fc7da201c1e4221535.jpg@68w_68h"
                width={34}
                height={34}
              />
            </div>
            <div className="right">
              <div className="dis-top">
                <div>
                  <div className="name-box">
                    <span className="name">大雄WOW</span>
                    <img
                      className="img noneBg level-icon"
                      alt="level-icon"
                      src="//p0.meituan.net/moviemachine/83a90e3a7dda4463963fbc7fb8c02ee32335.png"
                      width={31}
                      height={15}
                    />
                  </div>
                  <div>
                    <span className="grade-score">给这部电影打了8分</span>
                  </div>
                </div>
              </div>
              <div className="middle">
                <a
                  data-bid="b_h7xvl"
                  href="#"
                >
                {/* {
                    <NavLink>
                } */}
                  <span onClick={()=>this.props.history.push("/discussdetail")} className="comment-content">
                    《冰雪奇缘2》依旧是大、小孩子喜爱的音乐动画电影。[机智]对幼儿音乐启蒙教育起到了至关重要的作用。迪士尼的制作水准没的说，只不过前半段的叙事节奏稍显缓慢。吐槽一下ed是真的长。happy
                    ending[微笑]
                  </span>
                </a>
              </div>
              <div className="bottom">
                <div>
                  <time className="time" title={1574359980000}>
                    11-22
                  </time>
                </div>
                <div className="right">
                  <img
                    className="img noneBg thumb-up"
                    alt="thumb-up"
                    src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/thumb-up-comment.png"
                    width={10}
                    height={10}
                  />
                  <span className="praise-num">2195</span>
                  <a
                    className="goto-comments"
                    href="//m.maoyan.com/movie/247949/replies/1091966176"
                  >
                    <img
                      className="img noneBg comment-icon"
                      alt="comment"
                      src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/discussion-comment.png"
                      width={12}
                      height={12}
                    />
                    <span className="comments-num">118</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="separator-line" />
        <footer>
          <a
            href="/app?_v_=yes&f=&to=meituanmovie%3A%2F%2Fwww.meituan.com%2Fmovie%3Fid%3D247949%26nm%3D%25E5%2586%25B0%25E9%259B%25AA%25E5%25A5%2587%25E7%25BC%25982"
            className="link goto-all-comments"
            data-event="donwload3"
            link="meituanmovie://www.meituan.com/movie?id=247949&nm=%E5%86%B0%E9%9B%AA%E5%A5%87%E7%BC%982"
            data-bid="b_53up23as"
            data-view-bid="b_movie_b_53up23as_mv"
            data-lab="{&quot;movieId&quot;:247949,&quot;position&quot;:&quot;comment&quot;}"
            data-view-sended={1}
          >
            <span>打开App，42566人正在讨论</span>
            <img
              className="img noneBg arrow-right-red"
              alt="arrow-r-red"
              src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/arrow-right-red.png"
              width={6}
              height={11}
            />
          </a>
        </footer>
      </section>
    );
  }
}
export default withRouter(Discussion)

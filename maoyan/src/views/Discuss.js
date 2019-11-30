import React from "react";
import "../assets/css/discussion/discuss.css";
import axios from "axios";

export default class Discuss extends React.Component {
  constructor() {
    super();
    this.state = {
      cmts: [],
      ocm: {}
      // discussId:this.props.discussId
    };
  }

  async componentDidMount() {
    const { data } = await axios.get("/mmdb/replies/comment/1091966176.json", {
      params: {
        _v_: "yes",
        offset: 10
      }
    });
    this.setState({
      cmts: data.cmts,
      ocm: data.ocm
    });
    console.log(data);
  }

  render() {
    return (
      <div className="discuss">
        <div className="discuss-top">
          <a
            className="discuss-back"
            onClick={() => {
              this.props.history.go(-1);
            }}
          />
          <p>猫眼讨论-两只老虎</p>
        </div>
        <div className="discuss-header">
          <div className="discuss-header-left">123</div>
          <div className="discuss-header-right">
            <div>
              <em>月半一半</em>
              <span className="right-lv" />
              <span className="right-shop" />
            </div>
            <div className="right-grade">给这部作品打了6分</div>
            <div className="right-details">{this.state.ocm.content}</div>
            <div className="right-foot">
              <div>11-22</div>
              <div className="right-foot-div">
                <div className="right-foot-span1">
                  <img
                    className="right-foot-img1"
                    src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/thumb-up-comment.png"
                    alt="thumb"
                    widht="15"
                    height="15"
                  />
                  <em>2550</em>
                </div>
                <div className="right-foot-span1">
                  <img
                    className="right-foot-img2"
                    src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/discussion-comment.png"
                    alt="thumb"
                    width="15"
                    height="15"
                  />
                  <em>136</em>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.state.cmts.map((item,index) => {
          return (
            <div key={index} className="discuss-foot">
              <div className="discuss-foot-img">
                <img
                  src="https://img.meituan.net/avatar/7999b65b287e6b5e63186d9501d92cb98383.jpg"
                  alt="thumb"
                />
              </div>
              <div className="discuss-foot-p">
                <p className="discuss-foot-p1">123123123</p>
                <p className="discuss-foot-p2">1231231231</p>
                <p className="discuss-foot-p3">
                  1231234334343434111222312312312312312312312334234234234234234123123123
                </p>
              </div>
            </div>
          );
        })}

        <div className="discuss-loading">加载中...</div>

        <div className="footer-misc">
          <div className="copyright">
            <span>
              <span>© 猫眼电影 客服电话: </span>
              <a href="tel:10105335">1010-5335</a>
            </span>
          </div>
          <p className="icp">
            <a
              href="http://www.miibeian.gov.cn"
              className="link"
              data-event="http:__www.miibeian.gov.cn"
              target="_blank"
            >
              <span>京ICP备16022489号-1</span>
            </a>
            <span>&nbsp;</span>
            <a
              href="http://www.beian.gov.cn"
              className="link"
              data-event="http:__www.beian.gov.cn"
              target="_blank"
            >
              <span>京公网安备11010502030881号</span>
            </a>
          </p>
          <p className="sankuai">
            <a href="#" className="link">
              <span>北京猫眼文化传媒有限公司</span>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

import React from "react";
import '../assets/css/discussion/discuss.css'
import axios from "axios";

export default class Discuss extends React.Component {
  constructor() {
    super();
    this.state = {
      context: [],
      contextLi: {}
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
      context: data.cmts,
      contextLi: data.ocm
    });
  }

  render() {
    return (
      <div className="discuss">
        <div className="discuss-top">
          <a className="discuss-back"></a>
          <p>猫眼讨论-两只老虎</p>
        </div>
        <div className="discuss-header">
          <div className="discuss-header-left">
            123
          </div>
          <div className="discuss-header-right">
            <div>
              <em>月半一半</em>
              <span className="right-lv"></span>
              <span className="right-shop"></span>
            </div>
            <div className="">给这部作品打了6分</div>
            <div>一个人包场看的，满心而来，失望而去，
              票房估计要扑街了。整体没有亮点，
              没有笑点，没有泪点，影片最后略有升华。
              在葛大爷的影史上，这算得上是失败的一笔了。
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>





      </div>
    );
  }
}

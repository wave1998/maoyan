import React from 'react'
import "../../assets/css/cinema/session.css"

class Session extends React.Component{
    render(){
        return(
            <div>
                <div className="detail">
                    <span>冰雪奇缘</span>
                    <a>8.9分</a>
                    <h2>104分钟|喜剧|克里斯汀</h2>
                </div>
                <div className="date">
                    <span>今天11月28日</span>
                    <span>今天11月28日</span>
                </div>
                <div className="banner">
                    <a>折扣</a>
                    <p>现在开卡，首单2张最高立减6元</p>
                    <span>20元起开卡></span>
                </div>
                <div className="session">
                    <div className="session_1">
                        <a>19.35</a>
                        <span>21.19</span>
                        <p>散场</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Session;
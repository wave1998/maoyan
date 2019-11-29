import React, {Fragment} from 'react'
import { withRouter } from 'react-router-dom'
import '../../assets/css/movieList.css'


class MovieList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            ToUrl:this.props.ToUrl || "/movie/cinema/"
        }
    }
    render(props) {
        return (
            this.props.movieList?
                this.props.movieList.map(v =>
                    <div key={v.id} onClick={()=>{this.props.history.push({pathname:this.state.ToUrl + v.id})}}>
                        <div className="movie-list">
                            <div className="movie-img">
                                <img src={v.img.replace("w.h", "128.180")} alt={"电影封面"}/>
                            </div>
                            <div className="right-info">
                                <ul className="movie-info">
                                    <li className="name">{v.nm}</li>
                                    {
                                        v.globalReleased && v.sc !== 0 ?
                                            <li className="score">
                                                观众评
                                                <span>{v.sc}</span>
                                            </li>
                                            : null
                                    }
                                    {
                                        v.globalReleased && v.sc == 0 ?
                                            <li style={{fontSize: "14px",color: "#888"}}>暂无评分</li>
                                            : null
                                    }
                                    {
                                        !v.globalReleased ?
                                            <li className="score">
                                                <span>{v.wish}</span> 想看
                                            </li>
                                            : null
                                    }
                                    <li className="actor">{v.star}</li>
                                    <li className="showinfo">{v.showInfo}</li>
                                </ul>
                                <div className="btn">
                                    {
                                        v.globalReleased ?
                                            <button className="buy-btn">购票</button>
                                            : <button className="pre-btn">预售</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            ):null
    )
}
}
export default withRouter(MovieList)
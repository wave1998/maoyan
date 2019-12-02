import React from 'react'
import "../../assets/css/cinema/cinemaList.css"
import {withRouter} from 'react-router-dom'

class CinemaList extends React.Component {
    render(props) {
        return (
                <div className="cinema-list">
                    <div className="list-wrap">
                        {/*下面这个div点击之后跳转到 影院详情，传参数cinemaId和movieId*/}
                        {
                            this.props.cinemaList ?
                                this.props.cinemaList.map(v =>
                                    <div className="item" key={v.id} onClick={()=>this.props.history.push("/cinemadetail"+"/"+v.id)}>
                                        <div className="title-block">
                                            <div className="title-label">
                                                <span>{v.nm}</span>
                                                <span>
                                                    <span className="price">{v.sellPrice}</span>
                                                    <span className="q">元起</span>
                                                </span>
                                            </div>
                                            <div className="location-block line-ellipsis">
                                                <div className={"line-ellipsis"} style={{flex:1,width:"80%"}}>{v.addr}</div>
                                                <div className="distance">{v.distance}</div>
                                            </div>
                                            <div className="label-block">
                                                {v.tag.allowRefund === 1 ? <div className="allowRefund">退</div> : null}
                                                {v.tag.endorse === 1 ? <div className="endorse">改签</div> : null}
                                                {v.tag.snack === 1 ? <div className="snack">小吃</div> : null}
                                                {v.tag.vipTag ? <div className="vipTag">{v.tag.vipTag}</div> : null}
                                                {/*{*/}
                                                {/*    v.tag.hallType.map(v =>*/}
                                                {/*        <div className="hallType" key="v">{{v}}</div>*/}
                                                {/*    )*/}
                                                {/*}*/}
                                            </div>
                                            {
                                                Object.keys(v.promotion).length !== 0 ?
                                                    <div className="discount-block">
                                                        <div className="discount-label">
                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt=""/>
                                                        </div>
                                                        <div className="discount-label-text">
                                                            {v.promotion.cardPromotionTag}
                                                        </div>
                                                    </div> : null
                                            }
                                        </div>
                                    </div>
                                ) : null}
                    </div>
                </div>


        )
    }

}

export default withRouter(CinemaList)
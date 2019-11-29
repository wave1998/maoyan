import React from 'react'
import {withRouter} from 'react-router-dom'
class DetailHeader extends React.Component{
    render() {
        const style = {
            height: "51px",
            width: "100%",
            backgroundColor: "rgb(229, 72, 71)",
            textAlign: "center",
            lineHeight: "51px",
            color: "#fff",
            fontSize: "1.1em",
            position:'relative'
        }
        return (
            <div style={style}>
                <div
                    onClick={()=>this.props.history.go(-1)}
                    style={{position:"absolute",marginLeft:"20px"}}>返回</div>
                {this.props.pageTitle}
            </div>
        )
    }
}
export default withRouter(DetailHeader)
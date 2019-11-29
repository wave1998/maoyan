import React from 'react'
class CommonHeader extends React.Component{
    constructor(){
        super()
    }
    render(props) {
        const style = {
            height: "51px",
            width: "100%",
            backgroundColor: "rgb(229, 72, 71)",
            textAlign: "center",
            lineHeight: "51px",
            color: "#fff",
            fontSize: "1.1em",
        }
        return (
            <div>
                <div className="pageTitle" style={style}>{this.props.pageTitle}</div>
            </div>
        );
    }
}
export default CommonHeader
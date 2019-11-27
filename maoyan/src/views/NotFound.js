import React , { Component } from "react"
import { Link } from "react-router-dom"

export default class NotFound extends Component {
    render() {
        return (
            <div>
                404Not Found
                <h1>回到首页<Link to="/">首页</Link> </h1>
            </div>
        )
    }
}
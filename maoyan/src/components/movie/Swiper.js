import React from 'react';

export default class Swiper extends React.Component{
    render() {
        return (
            <div  className={"most-expected"}>
                <p className={"title"}>近期最受期待</p>
                <div className = {"expected-item"}>
                    <div className={"poster"}><img/></div>
                    <div className={"name"}>yueza</div>
                    <div className={"date"}>2019.11.27</div>
                </div>
            </div>

        )
    }
}
import React from 'react';
import CommonHeader from "../../components/common/CommonHeader";
export default class MyOrder extends React.Component{
    render() {
        return (
            <div>
                <CommonHeader></CommonHeader>
                <div className="order-item mb-line-tb">
                    <div className="order-title mb-line-b">
                        <a className="cinema-name line-ellipsis">
                            恒大影城
                        </a>
                    </div>
                    <a data-link="/order/1622792273?$from=canary&amp;_v_=yes" className="order-detail-link">
                        <div className="order-info">
                            <img src="//p1.meituan.net/114.160/movie/8798032469af2faf18e531f7cdedc39e998644.jpg" alt=""/>
                                <div className="order-desc">
                                    <div className="movie-name line-ellipsis">正义联盟&nbsp;&nbsp;<span>2张</span></div>
                                    <div className="showTime line-ellipsis">2017-12-01 周五 22:00</div>
                                    <div className="position line-ellipsis">1号厅
                                        <span>6排07座</span>
                                        <span>6排06座</span>
                                    </div>
                                </div>
                        </div>
                    </a>
                    <div className="order-more  mb-line-t">
                        <div className="price">总价：<span>60元</span></div>
                        <div className="status">已完成</div>
                    </div>
                </div>
            </div>
        )
    }
}
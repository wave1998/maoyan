import React from 'react';
import CommonHeader from "../../components/common/CommonHeader";
import axios from 'axios'
import '../../assets/css/my/myOrder.css';
export default class MyOrder extends React.Component{
    render() {
        return (
            <div className="mybox">
                <CommonHeader></CommonHeader>
                <div class="no-data">
        <div class="wrapper" >
            <div class="tip-text">您最近还没有新订单，赶快去下一单吧</div>
        </div>
    </div>
            </div>
        )
    }
     async componentDidMount() {
        const orderlist =  await axios.get("/ajax/myOrderList")
         console.log(111111,orderlist)
    }
}
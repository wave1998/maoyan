import React from 'react'
import AMap from 'react-amap'
import Geolocation from 'react-amap-plugin-geolocation'
class LocationModule extends React.Component{
    constructor(){
        super()
        this.state={
            formattedAddress:"定位中..."
        }
    }
    render() {
        return (
            <li onClick={()=>{this.props.history.push("/location")}}>
                {this.state.formattedAddress}
                <span className="iconfont icon-xiala"></span>
            </li>
        )
    }
    componentDidMount() {
        const _this = this;
        Geolocation('AMap.Geolocation', function() {
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
            })

            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', onComplete)
            AMap.event.addListener(geolocation, 'error', onError)

            function onComplete (data) {
                // data是具体的定位信息
                _this.state.formattedAddress = data.formattedAddress
            }

            function onError (data) {
                // 定位出错
            }
        })
    }
}
export default LocationModule
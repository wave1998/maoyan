import React from 'react'
import axios from 'axios'
import '../../assets/css/city/citylist.css'
import cityList from '../../assets/city.json'

class CityList extends React.Component {
    constructor(){
        super();
        this.state={
            cityList:cityList.cts
        }
    }
    render() {
        return (
            <div className="list">
                {/*下面的传值操作，:data="cities"*/}
                <div className="wrap_content">
                    <div>
                        <div className="area">
                            <div className="title scale-1px">当前城市</div>
                            <div className="button-list">

                                <div className="button-wrapper">
                                    <div className="button">北京</div>
                                </div>


                            </div>
                        </div>
                        <div className="area">
                            <div className="title scale-1px">热门城市</div>
                            <div className="button-list">
                                {/*热门城市遍历*/}
                                <div className="button-wrapper">
                                    <div className="button">"v.name"</div>
                                </div>
                            </div>
                        </div>
                        {/*其他城市遍历*/}

                        <div className="area"
                             v-for="(item, key) of cities"
                             key="key"
                             ref="key"
                        >
                            <div className="title scale-1px">{"{key}"}</div>
                            <div className="item-list">
                                {
                                    this.state.cityList.map(v=>
                                    <div className="item scale-1px" v-for="innerItem of item" key={v.id}>
                                    {v.nm}
                                </div>
                                    )
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // async componentDidMount() {
    //     const {data} = await axios.get("/dianying/cities.json")
    //     this.setState({
    //         cityList: data.cts
    //     })
    //     console.log(222, data.cts)
    // }
}

export default CityList
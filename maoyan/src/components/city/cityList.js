import React from 'react'
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router-dom'
import '../../assets/css/city/citylist.css'
import cityList from '../../assets/city.json'
import { province } from 'antd-mobile-demo-data';
import { StickyContainer, Sticky } from 'react-sticky';
import { ListView, List,  } from 'antd-mobile';
import store from '../../store'

const { Item } = List;
// label
// value
function genData(ds, provinceData) {
    const dataBlob = {};
    const sectionIDs = [];
    const rowIDs = [];
    Object.keys(provinceData).forEach((item, index) => {
        sectionIDs.push(item);
        dataBlob[item] = item;
        rowIDs[index] = [];

        provinceData[item].forEach((jj) => {
            rowIDs[index].push(jj.value);
            dataBlob[jj.value] = jj.label;
        });
    });
    return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
}

class CityList extends React.Component {
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            inputValue: '',
            dataSource,
            isLoading: true,
        };
    }
    changeCity(id,e){
        console.log(e.target.innerText)
        this.props.history.go(-1)
        store.dispatch({
            type:'CHANGE_CITY',
            payload:{
                cityId:id,
                cityName:e.target.innerText
            }
        })
    }
    changeCity2(rowData) {
        const {value} = cityList.cts.find(v => v.label === rowData)
        this.props.history.go(-1)
        store.dispatch({
            type:'CHANGE_CITY',
            payload:{
                cityId:value,
                cityName:rowData
            }
        })
    }


    componentDidMount() {
        // simulate initial Ajax
            this.setState({
                dataSource: genData(this.state.dataSource, province),
                isLoading: false,
            });
    }

    // onSearch = (val) => {
    //     const pd = { ...province };
    //     Object.keys(pd).forEach((item) => {
    //         const arr = pd[item].filter(jj => jj.spell.toLocaleLowerCase().indexOf(val) > -1);
    //         if (!arr.length) {
    //             delete pd[item];
    //         } else {
    //             pd[item] = arr;
    //         }
    //     });
    //     this.setState({
    //         inputValue: val,
    //         dataSource: genData(this.state.dataSource, pd),
    //     });
    // }

    render() {
        return (
            <div  style={{ paddingTop: '44px', position: 'relative' }}>
                {/*搜索*/}
            {/*<div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                <SearchBar
                    value={this.state.inputValue}
                    placeholder="Search"
                    onChange={this.onSearch}
                    onClear={() => { console.log('onClear'); }}
                    onCancel={() => { console.log('onCancel'); }}
                />
            </div>*/}
                {/*定位*/}
                <div className="list">
                    {/*下面的传值操作，:data="cities"*/}
                    <div className="wrap_content">
                        <div className="area">
                            <div className="title scale-1px">当前城市</div>
                            <div className="button-list">
                                <div className="button-wrapper" onClick={this.changeCity.bind(this,1)}>
                                    <div className="button" ref={"cityName"}>北京</div>
                                </div>

                            </div>
                        </div>
                        <div className="area">
                            <div className="title scale-1px">热门城市</div>
                            <div className="button-list">
                                {/*热门城市遍历*/}
                                <div className="button-wrapper" onClick={this.changeCity.bind(this,1)}>
                                    <div className="button">北京</div>
                                </div>
                                <div className="button-wrapper" onClick={this.changeCity.bind(this,10)}>
                                    <div className="button">上海</div>
                                </div>
                                <div className="button-wrapper" onClick={this.changeCity.bind(this,57)}>
                                    <div className="button">武汉</div>
                                </div>
                                <div className="button-wrapper" onClick={this.changeCity.bind(this,97)}>
                                    <div className="button">焦作</div>
                                </div>
                                <div className="button-wrapper" onClick={this.changeCity.bind(this,30)}>
                                    <div className="button">深圳</div>
                                </div>
                                <div className="button-wrapper" onClick={this.changeCity.bind(this,20)}>
                                    <div className="button">广州</div>
                                </div>
                                <div className="button-wrapper" onClick={this.changeCity.bind(this,55)}>
                                    <div className="button">南京</div>
                                </div>
                                <div className="button-wrapper" onClick={this.changeCity.bind(this,80)}>
                                    <div className="button">苏州</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                {/*主体*/}
            <ListView.IndexedList
                dataSource={this.state.dataSource}
                className="am-list sticky-list"
                useBodyScroll
                renderSectionWrapper={sectionID => (
                    <StickyContainer
                        key={`s_${sectionID}_c`}
                        className="sticky-container"
                        style={{ zIndex: 4 }}
                    />
                )}
                renderSectionHeader={sectionData => (
                    <Sticky>
                        {({
                              style,
                          }) => (
                            <div
                                className="sticky"
                                style={{
                                    ...style,
                                    zIndex: 3,
                                    // backgroundColor: sectionData.charCodeAt(0) % 2 ? '#5890ff' : '#F8591A',
                                    background:"#eee",
                                    color: 'black',
                                }}
                            >{sectionData}</div>
                        )}
                    </Sticky>
                )}
                // renderHeader={() => <span>custom header</span>}
                // renderFooter={() => <span>custom footer</span>}
                renderRow={rowData => (<Item onClick={this.changeCity2.bind(this,rowData)}>{rowData}</Item>)}
                quickSearchBarStyle={{
                    top: 85,
                }}
                delayTime={10}
                delayActivityIndicator={<div style={{ padding: 25, textAlign: 'center' }}>rendering...</div>}
            />
        </div>);
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
            return;
        };
    }
}

ReactDOM.render(<CityList />, document.getElementById('root'));



export default withRouter(CityList)
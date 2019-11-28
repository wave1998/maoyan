import React from 'react'
import '../../assets/css/cinema/navWrap.css'
class NavWrap extends React.Component {
    render() {
        return (
            // onClick="handleOpen"
            <div className="nav-wrap" >
        <ul>
            <li>全城<span className="yo-ico">&#xf033;</span></li>
            <li>品牌<span className="yo-ico">&#xf033;</span></li>
            <li>特色<span className="yo-ico">&#xf033;</span></li>
        </ul>
                {/*<div className="close-tab" v-show="show">
        //     <div className="tab">
        //         <div v-for="(region,key,index) in regions" :key="key" @click="handleClick(region,key,index)"
        //         :className="{active:currentActive === index}"
        //     >
        //         {{region}}
        //     </div>
        // </div>
        // <van-tree-select height="4.8rem" :items="items" :main-active-index.sync="activeIndex">
        <template slot="content">
        </template>
    </van-tree-select>
    </div>*/}

        </div>
    )
    }
}

export default NavWrap
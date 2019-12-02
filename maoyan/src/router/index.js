import Home from '../views/Home'
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Search from "../views/search/Search";
import Location from "../views/CityList";
import CinemaDetail from "../views/detail/CinemaDetail";
import MovieDetail from "../views/detail/MovieDetail";
import MyOrder from "../views/my/MyOrder";
import MovieCinema from "../views/detail/MovieCinema";
import Discuss from '../views/Discuss'

const mainRouter = [
    
    {
        pathname:"/",
        component:Home,
        exact:true,
        title:"电影",
    },
    {
        pathname:"/cinemaDetail/:cinemaId",
        component:CinemaDetail,
        exact:false,
        title:"影院详情",
    },
    {
        pathname:"/MovieDetail",
        component:MovieDetail,
        exact:false,
        title:"电影详情",
    },
    {
        pathname:"/Location",
        component:Location,
        exact:false,
        title:"定位",
    },
    {
        pathname:"/Search",
        component:Search,
        exact:false,
        title:"搜索",
    },
    {
        pathname:"/movie/cinema/:movieId",
        component:MovieCinema,
        exact:false,
        title:"电影有哪些影院播放",
    },
    {
        pathname:"/MyOrder",
        component:MyOrder,
        exact:false,
        title:"我的历史订单",
    },
    {
        pathname:"/login",
        component:Login,
        exact:false,
        title:"登录"
    },
    {
        pathname:"/404",
        component:NotFound,
        exact:true,
        title:"NotFound"
    },
    
    {
        pathname:"/discussdetail",
        component:Discuss,
        exact:false,
        title:"评论详情",
    },
]
export default mainRouter
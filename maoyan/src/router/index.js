import Home from '../views/Home'
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Search from "../views/search/Search";
import Location from "../views/Location";
import CinemaDetail from "../views/detail/CinemaDetail";
import MovieDetail from "../views/detail/MovieDetail";
import MyOrder from "../views/my/MyOrder";


const mainRouter = [
    {
        pathname:"/",
        component:Home,
        exact:true,
        title:"电影",
    },
    {
        pathname:"/cinemaDetail",
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
]
export default mainRouter
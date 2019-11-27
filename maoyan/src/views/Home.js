import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
} from 'react-router-dom'
import CommonFooter from '../components/common/CommonFooter'
import Movie from './Movie';
import Cinema from "./cinema";
import My from "./my";

class Home extends React.Component{
    render(props) {
        console.log(this.props)
        return (
            <div>
                
               <Switch>
                   <Route path={"/"} component={Movie} exact></Route>
                   <Route path={"/cinema"} component={Cinema} exact></Route>
                   <Route path={"/my"} component={My} exact></Route>
               </Switch>
               <CommonFooter class="homeFooter"></CommonFooter>
                {/*<Switch>*/}
                {/*    {*/}
                {/*        homeRouter.children.map(v=>{*/}
                {/*            return (*/}
                {/*                <Route*/}
                {/*                    path={v.pathname}*/}
                {/*                    component={v.component}*/}
                {/*                    exact={v.exact}*/}
                {/*                    key={v.pathname}*/}
                {/*                ></Route>*/}
                {/*            )*/}
                {/*            }*/}
                {/*        )*/}
                {/*    }*/}
                {/*</Switch>*/}
            </div>
        )
    }
}
export default Home

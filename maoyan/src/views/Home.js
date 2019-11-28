import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom'
import CommonFooter from '../components/common/CommonFooter'
import Movie from './Movie';
import Cinema from "./cinema";
import My from "./my";

class Home extends React.Component{
    render(props) {
        return (
            <div>
               <Switch>
                   <Route path={"/"} component={Movie} exact></Route>
                   <Route path={"/cinema"} component={Cinema} exact></Route>
                   <Route path={"/my"} component={My} exact></Route>
               </Switch>
               <CommonFooter class="homeFooter"></CommonFooter>
            </div>
        )
    }
}
export default Home

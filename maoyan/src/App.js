import React from 'react';
import './App.css';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  return (
      <div className={"App"}>
        <Router>
          <Switch>
            <Route path={"/"} component={Home}></Route>
            <Route path={"/login"} component={Login}></Route>
          </Switch>
        </Router>
      </div>
  )
}

export default App;

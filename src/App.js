import React from 'react';
import './App.css';
import "./component/css/Main.css"
import SideBar from './component/SideBar' 
import MainPage from './component/MainPage';
import OtherPage from './component/OtherPage';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {

  return (
    <body>
      <div className="contain">
        <Router>
          <SideBar></SideBar>
          <div className="subcontain">
            <Switch>
              <Route path="/other" component={OtherPage} />
              <Route path="/main" component={MainPage} />
            </Switch>
          </div>
        </Router>
      </div>
    </body>
  );
}

export default App;

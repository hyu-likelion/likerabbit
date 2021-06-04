import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./Screens/home";
import SignUp from "./Screens/signup";
import Login from "./Screens/login";
import Main from "./Screens/main";

import './App.css';

const App:React.FC = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/signup" exact={true} component={SignUp}/>
      <Route path="/main" exact={true} component={Main}/>
      <Route path="/login" exact={true} component={Login}/>
    </HashRouter>
  );
}

export default App;

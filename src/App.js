//import Header from './components/Header'
//import GetMoreInfoButton from './components/GetMoreInfoButton'
//import GetStartedButton from './components/GetStartedButton'
//import GetFeedButton from './components/GetFeedButton'
//import LogoutButton from './components/LogoutButton'
//RightHeader'
import React from "react";
import Layout from "./components/Layout";
import RightHeader from './components/RightHeader';
//import {  Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Settings from "./pages/settings";
import Feed from "./pages/Feed";



const App = () => {
  return (
    <div className="App">
      <Layout>
        <RightHeader />
        <Router>
          <Switch>
            <Route path="/Settings" exact component={() => <Settings />} />
            <Route path="/Feed" exact component={() => <Feed />} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
};
export default App;




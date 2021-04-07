import React from "react";
import Layout from "./components/Layout";
import RightHeader from "./components/RightHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./pages/settings";
import GeoLocation from "./components/GeoLocation";
import FamilyTele from './components/FamilyTele'
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Info from "./pages/Info";

const App = () => {
  
  return (
    <div className="App">
      <Layout>
        <RightHeader />
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/Settings" exact component={() => <Settings />} />
            <Route path="/Feed" exact component={() => <Feed />} />
            <Route path="/Info" exact component={() => <Info />} />
            <Route path='/familytele' exact component={() => <FamilyTele />} />
            <Route path="/GeoLocation" exact component={() => <GeoLocation />} />
            <Route path="/Home" exact component={() => <Home />} />
            
          </Switch>
        </Router>
      </Layout>
    </div>
  );
};
export default App;

import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Ads from "./pages/Ads";
import SingleAd from "./pages/SingleAd";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Ads/" component={Ads} />
        <Route exact path="/Ads/:slug" component={SingleAd} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

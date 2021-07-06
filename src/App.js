import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Fav from "./components/Fav";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/fav">
              <Fav />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

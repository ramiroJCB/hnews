import HackerNews from "../features/hackerNews";
import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HackerNews} />
        <Redirect from="/:deleted" to="/" />
      </Switch>
    </Router>
  );
};

export default App;

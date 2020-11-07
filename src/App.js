import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import SingleArticle from "./pages/SingleArticle";

function App() {
  return (
    <div>
      <Link to='/'>Domov</Link>
      <Link to='/articles'>Članki</Link>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/articles'>
          <Articles />
        </Route>
        <Route path='/articles/:articleId'>
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

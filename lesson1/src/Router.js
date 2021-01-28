import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import App from './App';
  import About from './about/About';
  import News from './news/News';

  export default function Routes(){
      return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/News">News</Link>
            </li>
          </ul>
  
          <hr />

                <Switch>
                <Route exact path="/home">
                    <App />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                </Switch>
            </div>
            </Router>
      )
  }

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from "react-router-dom";

import Home from './pages/Home';
import Search from './pages/Search';
import List from './pages/List';

import './css/main.min.css';

class App extends React.Component {
  render() {
    return <div className="app">
      <div className="header">
        <h1 className="header__title">WatchList</h1>
      </div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/list">
            <List />
          </Route>
        </Switch>
        <div className="tab">
          <NavLink to="/home" className="tab__link" activeClassName="tab__link--active">
            <div className="tab__icon home"></div>
            <span className="tab__label">Home</span>
          </NavLink>

          <NavLink to="/search" className="tab__link" activeClassName="tab__link--active">
            <div className="tab__icon search"></div>
            <span className="tab__label">Search</span>
          </NavLink>

          <NavLink to="/list" className="tab__link" activeClassName="tab__link--active">
            <div className="tab__icon list"></div>
            <span className="tab__label">My list</span>
          </NavLink>
        </div>
      </Router>
    </div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/header';
import { Route, Switch } from 'react-router-dom';
import Projects from './pages/projects'
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Home from './pages/home'
import Error from './pages/error'

function App() {
  return (
    <div>
      <Header />
      <Switch>

        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/about" component={About}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route component={Error} />

      </Switch>
    </div>
  );
}

export default App;

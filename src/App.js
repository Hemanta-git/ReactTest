import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/home'


function App(){
  return (
    <div className="App">
    <Router>
    <ul>
    <li>
    <Link to='/'>Home</Link>
    </li>
    <li>
    <Link to='/About'>About As</Link>
    </li>
    <li>
    <Link to='/Contact'>Contact Us</Link>
    </li>
    <li>
    <Link to='/Portfolio'>Portfolio</Link>
    </li>
     

</ul>
<Switch>
<Route exact path='/' component={Home}></Route>
<Route path='/About' component={About}></Route>
<Route path='/Contact' component={Contact}></Route>
<Route path='/Portfolio' component={Portfolio}></Route>
</Switch>
</Router>

      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>    
    </div>
  );
 }

export default App;

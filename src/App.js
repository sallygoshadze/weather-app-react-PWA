import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Course from './components/Course/Course';
import Lesson from './components/Lesson/Lesson';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/course" exact component={Course} />
        <Route path="/lesson/:name" exact component={Lesson} />
        <Route path="/about" exact component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;

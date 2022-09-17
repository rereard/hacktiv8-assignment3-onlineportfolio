import './App.css';
import { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience/Experience';
import Skills from './Pages/Skills';
import Interest from './Pages/Interest';
import Award from './Pages/Award';

class App extends Component  {
  render(){
    return (
      <div className="container flex flex-row">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/interest" element={<Interest/>}/>
          <Route path="/awards" element={<Award/>}/>
        </Routes>
      </div> 
    );
  }
}

export default App;

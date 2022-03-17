import React,{useState,useMemo } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Index from './components/index';
import {UserContext} from './UserContext';
import Todo from './components/Todo';
import StarWars from './components/StarWars';
function App() {
  
  const [user,setUser] = useState(null);
  const providerValue = useMemo(()=> ({user,setUser}) , [user,setUser]);

  return (
    <UserContext.Provider value={providerValue}>
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/index"> Index </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
         <Route path="/index" element={<Index />} />
         <Route path='/starwars' element={<StarWars/>} />
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

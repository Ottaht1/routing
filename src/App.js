import React from 'react';
import './App.css';
import Nav from './Nav';
import Users from './Users';
import NotFound from './NotFound';
import Error from './Error';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
    <Routes>
     <Route path="/"  element={<Users/>} />
     <Route path="/users" element={<Users/>} />
     <Route path="*" element={<NotFound/>} />
     </Routes>
    </div>
    </Router>
  );
}


const Home =() => (
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;

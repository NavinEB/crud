import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import About from "./components/layouts/About";
import Home from "./components/layouts/Home";
import Employees from "./components/employees/Employees";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import Stocks from "./components/stocks/Stocks";
import StockDetails from "./components/stocks/StockDetails";

let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/employees" element={<Employees/>}/>
          <Route exact path="/employees/:id" element={<EmployeeDetails/>}/>
          <Route exact path="/stocks" element={<Stocks/>}/>
          <Route exact path="/stocks/:id" element={<StockDetails/>}/>
        </Routes>
      </Router>

    </React.Fragment>
  )
};

export default App;

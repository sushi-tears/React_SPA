import React, { Component } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "../Home/Home.js";
import Fire from "../Fire/Fire.js";
import Water from "../Water/Water.js";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <h1>Emoji Viewer</h1>
        <ul className="header">
          <li>
            <NavLink to="/fire">Click to see Fire</NavLink>
          </li>
          <li>
            <NavLink to="/">RESET</NavLink>
          </li>
          <li>
            <NavLink to="/water">Click to see Water</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fire" element={<Fire />} />
            <Route path="/water" element={<Water />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}
export default App;

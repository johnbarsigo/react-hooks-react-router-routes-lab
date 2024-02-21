import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
// import { Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return <div>{
      /*{code here}*/
      }

      {/* <BrowserRouter> */}
        <Router>
          <NavBar/>
          <Route exact path = "/" component = {Home} ></Route>
          <Route path = "/movies" component = {Movies} ></Route>
          <Route path = "/directors" component = {Directors} ></Route>
          <Route path = "/actors" component = {Actors} ></Route>
        </Router>
      {/* </BrowserRouter> */}

    </div>;
}

export default App;

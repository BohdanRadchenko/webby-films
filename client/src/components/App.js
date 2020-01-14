import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "../routes";
import {Navbar} from "./Navbar";
import 'materialize-css'

const App = () => {
  const routes = useRoutes();
  return (
    <Router>
      <div className="container">
        <Navbar/>
        {routes}
      </div>
    </Router>
  );
};

export default App;

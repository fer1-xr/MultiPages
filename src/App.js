import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navigation} from "./components/Navigation";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer"



function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/about" exact component={() => <About />} />
        <Route path="/contact" exact component={() => <Contact />} />
          

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
import React from "react";
import About from "./components/About";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DataProvider } from "./components/DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

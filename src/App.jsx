import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import "./styles/style.css";
import Header from "./components/Header"
import Menu from "./components/Menu"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Skill from "./pages/Skill"
import Contact from "./pages/Contact"


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
      <Menu />
      <p>ここはReactの練習用のサイトです.</p>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/skill' component={Skill} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </main>
      <hr />
      <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
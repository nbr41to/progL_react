import React from 'react';
import "./styles/style.css";
import Header from "./components/Header"
import Menu from "./components/Menu"
import Section from "./components/Section"
import Footer from "./components/Footer"
// catchはだめ

function App() {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <p>ここはReactの練習用のサイトです.</p>
      <main>
        <Section />
        <Section />
        <Section />
        <Section />
      </main>
      <hr />
      <Footer />
    </React.Fragment>
  );
}

export default App;

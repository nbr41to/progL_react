import React from 'react';
import "./style.css";
import logo from "./logo.png";
import eyecatch from "./catch.jpg";
// catchはだめ

function App() {
  return (
    <React.Fragment>
      <header>
        <div className="ttl_logo">
          {/* <img src={require("./logo.png")} alt="siteLogoロゴ1" /> */}
          <img src={logo} alt="siteLogoロゴ2" />
        </div>
        <h1>PortfolioSite</h1>
      </header>
      <nav>
        <ul>
          <h2>MENU</h2>
          <a href="#"><li>HOME</li></a>
          <a href="#"><li>ABOUT</li></a>
          <a href="#"><li>SKILL</li></a>
          <a href="#"><li>CONTACT</li></a>
        </ul>
      </nav>
      <p>ここはReactの練習用のサイトです.</p>
      <main>
        <section>
          <div className="text_box">
            <h2>React</h2>
            <p>Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.</p>
          </div>
          <img src={eyecatch} alt="catch" />
        </section>
        <section>
          <div className="text_box">
            <h2>React</h2>
            <p>Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.</p>
          </div>
          <img src={eyecatch} alt="catch" />
        </section>
        <section>
          <div className="text_box">
            <h2>React</h2>
            <p>Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.</p>
          </div>
          <img src={eyecatch} alt="catch" />
        </section>
        <section>
          <div className="text_box">
            <h2>React</h2>
            <p>Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.</p>
          </div>
          <img src={eyecatch} alt="catch" />
        </section>
      </main>
      <hr />
      <footer>
        <a href="https://www.notion.so/nob41to/StudyLogs-progLeaning-d7e25ed2e76e4ce48667c85e8af8063c">
          Study Logs
        </a>
        <small>Copyright 2020 @ Knob</small>
      </footer>
    </React.Fragment>
  );
}

export default App;

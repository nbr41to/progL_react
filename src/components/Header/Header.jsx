import React from 'react';
import logo from "./logo.png";

function Header() {
    return (
        <React.Fragment>
            <header>
                <div className="ttl_logo">
                    {/* <img src={require("./image/logo.png")} alt="siteLogoロゴ1" /> */}
                    <img src={logo} alt="siteLogoロゴ2" />
                </div>
                <h1>PortfolioSite</h1>
            </header>
        </React.Fragment>
    );
}

export default Header;
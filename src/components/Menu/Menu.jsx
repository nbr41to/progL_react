import React from 'react';
import { Link } from 'react-router-dom'
function Menu() {
    return (
        <React.Fragment>
                <nav>
                    <ul>
                        <h2>MENU</h2>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/skill'>Skill</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
        </React.Fragment>
    );
}

export default Menu;
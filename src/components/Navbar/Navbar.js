import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "../Layout/Home";
import About from "../Layout/About";
import Services from "../Layout/Services";
import Contact from "../Layout/Contact";

function Navbar() {
    return ( 
        <Router>
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light ">
                    <a className="navbar-branch" href="/">
                        Logo
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarToggle">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="NavbarToggle">
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" >Home</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" >About</Link> 
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" 
                                    role="button" data-toggle="dropdown" aria-haspopup="true" 
                                    aria-expanded="false" to="/services" 
                                >Services</Link> 
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/">Action</a>
                                    <a className="dropdown-item" href="/">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" >Contact</Link> 
                            </li>
                        </ul>
                    </div>
                    
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router> 
    );
}

export default Navbar

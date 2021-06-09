import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-color">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-5 nav-modify">
                    <li className="nav-item active">
                        <Link className="nav-link  ms-3" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  ms-3" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  ms-3 " to="/blog">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  ms-3" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;
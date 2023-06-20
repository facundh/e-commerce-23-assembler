import { ReactElement } from "react"
import {Route, Routes, Link} from 'react-router-dom';
import { NavLink } from "../Navlink/NavLink";

import './styles.css';

export const Navbar = ():ReactElement => {
  return (
    <header>
        <nav className="navbar">
            <ul className="list-container">
                <li className="item-list"><NavLink to="/">Home</NavLink></li>
                <li className="item-list"><NavLink  to="/wish">Wish</NavLink></li>
                <li className="item-list"><NavLink  to="/cart">Cart</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}


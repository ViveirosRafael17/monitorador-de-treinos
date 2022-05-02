import React from "react";
import { NavLink } from "react-router-dom";
import './Treino-Style.css';

export const NavHeader = () => {
    return (
        <nav className="header-nav">
            <div className="header-nav-box">
                <NavLink to='/treino-a'>
                    Treino-A
                </NavLink>
                <NavLink to='/treino-b'>
                    Treino-B
                </NavLink>
                <NavLink to='/treino-c'>
                    Treino-C
                </NavLink>
                <NavLink to='/treino-d'>
                    Treino-D
                </NavLink>
            </div>
        </nav>
    )
}
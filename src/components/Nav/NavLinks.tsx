import React from 'react';
import './NavLinks.css';
import { NavLink } from 'react-router-dom';
import PagesData from '../../pages/PagesData/PagesData';
import { RouterType } from '../../types/Router.types';

const NavLinks = () => {
    const links = PagesData.map(({ title, path }: RouterType) => {
        return (
            <li>
                <NavLink to={`/${path}`} end>
                    {({ isActive, isPending, isTransitioning}) => (
                        <span className={isActive ? "active" : "inactive"}>{title}</span>
                    )}
                </NavLink>
            </li>
        )
    });
    return <ul className="nav-links">{links}</ul>;
};

export default NavLinks;
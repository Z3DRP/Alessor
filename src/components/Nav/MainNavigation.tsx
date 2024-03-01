import React from "react";
import MainHeader from "./MainHeader";
import { Link } from 'react-router-dom';
import NavLinks from "./NavLinks";
import SideDrawer from "./Sidebar";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import './MainNavigation.css';

const MainNavigation = () => {
    const handleDrawer = () => {
        return '';
    }

    return (
        <React.Fragment>
        <SideDrawer name="drawerProps">
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader name="headerProps">
        <HamburgerButton onClick={handleDrawer}/>
        <h1 className="main-navigation__title">
            <Link to="/">Alessor</Link>
        </h1>
        <nav className="main-navigation__header-nav">
            <NavLinks />
        </nav>
        </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;
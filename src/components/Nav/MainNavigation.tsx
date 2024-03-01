import React, { useState } from "react";
import MainHeader from "./MainHeader";
import { Link } from 'react-router-dom';
import NavLinks from "./NavLinks";
import SideDrawer from "./Sidebar";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import './MainNavigation.css';
import Backdrop from "../../uiElements/Backdrop/Backdrop";

// NOTE start at animating sideDrawer
const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
    const handleOpenDrawer = () => {
        setDrawerIsOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerIsOpen(false);
    }

    return (
        <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={handleCloseDrawer}/>}
        {drawerIsOpen && (
            <SideDrawer name="drawerProps">
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
            </SideDrawer>
        )}
        <MainHeader name="headerProps">
        <HamburgerButton onClick={handleOpenDrawer}/>
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
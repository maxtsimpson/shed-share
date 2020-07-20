import React from "react";
import M, { Navbar, Icon, NavItem } from 'react-materialize'

function Nav() {
    return (
        <Navbar
            className="blue-grey darken-4"
            alignLinks="right"
            brand={<a className="brand-logo" href="#">Max Simpson</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem href="Portfolio">
                Portfolio
            </NavItem>
            <NavItem href="AboutMe">
                About me
            </NavItem>
            <NavItem href="Contact">
                Contact
            </NavItem>
        </Navbar>
    )
}

export default Nav
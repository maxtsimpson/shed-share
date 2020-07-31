import React from "react";
import M, { Navbar, Icon, NavItem } from 'react-materialize'

function Nav() {
    return (
        <Navbar
            className="blue-grey darken-4"
            alignLinks="right"
            brand={<a className="brand-logo" href="#">Shed-Share</a>}
            id="mobile-nav"
            centerChildren
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
            <NavItem href="MyShed">
                MyShed
            </NavItem>
            <NavItem href="NewsFeed">
                NewsFeed
            </NavItem>
        </Navbar>
    )
}

export default Nav
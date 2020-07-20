import React from "react";
import M, { Navbar, Icon, NavItem } from 'react-materialize'

function Project({projectTitle, projectSteps=[], projectMaterialsList, projectImage}) {
    return (
        <h1>{projectTitle}</h1>
        {projectSteps.map(step => {
            
        })}
    )
}

export default Project
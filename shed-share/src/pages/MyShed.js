import React, { useEffect, useState } from "react";
import ProjectTimeline from '../components/ProjectTimeLine'
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectTabs from "../components/ProjectTabs";
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'
import API from "../utils/API";

const MyShed = props => {

    const [projects, setProjects] = useState([]);

    const populateProjects = () => {
        console.log('in populateProjects')
        API.getProjectList()
            .then(results => {
                console.log({ results })
                setProjects(results.data)
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        populateProjects()
    }, [])

    return(
        <ProjectTabs/>
    )
}

export default MyShed;

//*[@id="root"]/div
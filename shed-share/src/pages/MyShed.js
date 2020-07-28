import React, { useEffect, useState } from "react";
import ProjectTimeline from '../components/ProjectTimeLine'
import ProjectCarousel from "../components/ProjectCarousel";
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
        <> 
        <Row>
            <Col>
                <ProjectCarousel projects={projects}></ProjectCarousel>
            </Col>
            <Col>
                <ProjectTimeline></ProjectTimeline>  
            </Col>
        </Row>
        </>
    )
}

export default MyShed;
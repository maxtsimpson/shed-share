import React, { useState } from "react";
import { Timeline, TimelineEvent } from 'react-event-timeline'
import Moment from 'react-moment';
import MaterialIcon from 'material-icons-react';
import AddStepButton from "../AddStepButton";
import API from "../../utils/API";
import './style.css'

const timeLineColor = '#212121'

function ProjectTimeline({ project }) {

    const [thisProject, setThisProject] = useState(project);


    const addStepToProject = (step) => {
        console.log("addStepToProject has fired")
        thisProject.steps.push(step)
        API.updateProject(thisProject)
            .then(results => {
                console.log('results from update project',results)
                setThisProject(results)
            })
            .catch(error => console.error(error))
    }

    const getIconName = (categoryName) => {
        let iconName = ''
        switch (categoryName) {
            case 'Research':
                iconName = 'biotech'
                break;
            case 'Design':
                iconName = 'design_services'
                break;
            case 'Build':
                iconName = 'construction'
                break;
        }
        return iconName
    }

    return (
        // <Timeline style={{ height: "100%" }}>
        <>
        <Timeline>
            {thisProject.steps.map((step, index) => {
                return (
                    <TimelineEvent
                        key={step._id}
                        title={step.category.title}
                        container="card"
                        createdAt={<Moment local format="hA dddd do MMMM YYYY">
                            {step.createdAt}
                        </Moment>}
                        icon={<MaterialIcon icon={getIconName(step.category.title)} color={timeLineColor}></MaterialIcon>}
                    >
                        <p>{step.description}</p>
                        {/* <Row>
                            {step.img && <Col><img href={step.img}></img></Col>}
                            <Col>
                                <p>{step.description}</p>
                            </Col>
                        </Row> */}
                    </TimelineEvent>
                )
            })}
        </Timeline>
        <AddStepButton project={thisProject} addStepToProject={addStepToProject}></AddStepButton>
        </>
    )
}

export default ProjectTimeline

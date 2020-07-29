import React from "react";
import { Row, Col } from 'react-materialize'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import MaterialIcon from 'material-icons-react';
import './style.css'

const timeLineColor = '#212121'

function ProjectTimeline({ steps }) {
    return (
        <Timeline style={{height: "100%"}}>
            {steps.map((step, index) => {
                return (
                    <TimelineEvent
                        title={step.category.title}
                        createdAt={step.createdAt}
                        icon={<MaterialIcon icon={step.category.icon} color={timeLineColor}></MaterialIcon>}
                    >
                        <Row>
                            { step.img && <Col><img href={step.img}></img></Col> }
                            <Col>
                                <p>{step.description}</p>
                            </Col>
                        </Row>
                    </TimelineEvent>
                )
            })}
        </Timeline>
    )
}

export default ProjectTimeline

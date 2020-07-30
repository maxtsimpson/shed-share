import React, { ScrollView } from "react";
import { Row, Col, Container } from 'react-materialize'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import Moment from 'react-moment';
import MaterialIcon from 'material-icons-react';
import './style.css'

const timeLineColor = '#212121'

function ProjectTimeline({ steps }) {

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
        <Timeline style={{ height: "100%" }}>
            {steps.map((step, index) => {
                return (
                    <TimelineEvent
                        key={step._id}
                        title={step.category.title}
                        createdAt={<Moment local format="hA dddd do MMMM YYYY">
                            {step.createdAt}
                        </Moment>}
                        icon={<MaterialIcon icon={getIconName(step.category.title)} color={timeLineColor}></MaterialIcon>}
                    >
                        <Row>
                            {step.img && <Col><img href={step.img}></img></Col>}
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

import React from "react";
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import MaterialIcon, { colorPalette } from 'material-icons-react';
import './style.css'

const timeLineColor = '#212121'

function ProjectTimeline() {
    return (
        <>
            <Timeline>
                <TimelineEvent title="Research"
                    createdAt="2020-07-12 10:06 PM"
                    icon={<MaterialIcon icon="biotech" color={timeLineColor}></MaterialIcon>}
                >
                    I've had a look at what tools i need for the project. whether i could use angle grinder or an oxy torch
                </TimelineEvent>
                <TimelineEvent title="Design"
                    createdAt="2020-07-14 10:06 PM"
                    icon={<MaterialIcon icon="design_services" color={timeLineColor}></MaterialIcon>}

                >
                    I've sketched out a diagram with some measurements. used the kitchen bench height as a guide for my bench height
                </TimelineEvent>
                <TimelineEvent
                    title="Build"
                    createdAt="2020-07-16 09:06 AM"
                    icon={<MaterialIcon icon="construction" color={timeLineColor}></MaterialIcon>}
                >
                    Cut some old patio steel to length and started on some welds.
                </TimelineEvent>
            </Timeline>
        </>
    )

    return (
        <Timeline>
            {steps.map((step, index) => {
                <TimelineEvent title={stepCategory.Title}
                    createdAt={stepCreatedAt}
                    icon={<MaterialIcon icon={stepCategory.Icon} color={timeLineColor}></MaterialIcon>}
                >
                </TimelineEvent>
            })}
        </Timeline>
    )
}

export default ProjectTimeline

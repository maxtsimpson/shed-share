import React, { useEffect, useState } from "react";
import M, { Carousel, Icon } from 'react-materialize'
import ImageUploader from 'react-images-upload';

function ProjectCarousel() {

    const [projects, setProjects] = useState();

    const [content, setContent] = useState();

    useEffect(() => {
        API.getProjectList()
            .then(results => {
                setProjects(results)
                setContent(convertProjectsToCarousel(results))
            })
            .catch(error => console.error(error))
    }, [])

    const convertProjectsToCarousel = (projects) => {
        let content = projects.map(project, index => (
            <div key={index} style={{ backgroundImage: project.displayPic }}>
                <h2>
                    {project.Title}
                </h2>
            </div>
        ))
    }

    return (
        <Carousel
            carouselId="Carousel-2"
            className="white-text center"
            options={{
                fullWidth: true,
                indicators: true
            }}
        >
            {content}
        </Carousel>
    )
}

export default ProjectCarousel
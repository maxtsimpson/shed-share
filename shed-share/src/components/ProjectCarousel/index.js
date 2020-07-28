import React, { useEffect, useState } from "react";
import M, { Carousel, Icon } from 'react-materialize'
import ImageUploader from 'react-images-upload';
import API from "../../utils/API";


function ProjectCarousel() {

    const [projects, setProjects] = useState();
    const [content, setContent] = useState();

    const populateProjects = () => {
        console.log('in populateProjects')
        API.getProjectList()
            .then(results => {
                setProjects(results.data)
                convertProjectsToCarousel()
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        populateProjects()
    }, [])

    function convertProjectsToCarousel() {
        const content = projects.map((project, index) => (
            <div key={index} style={{ backgroundImage: project.displayPic }}>
                <h2>
                    {project.Title}
                </h2>
            </div>
        ))
        setContent(content)
    }

    return (
        <div>
            {content &&
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
            }
        </div>
    )
}

export default ProjectCarousel
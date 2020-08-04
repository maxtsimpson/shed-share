import React, { useEffect, useState } from "react";
import { Carousel } from 'react-materialize'
import API from "../../utils/API";


function ProjectCarousel() {

    const dummyProject = {
        title: "Dummy",
        displayPic: ""
    }

    const [projects, setProjects] = useState([dummyProject]);
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
        API.getProjectList()
            .then(results => setProjects(results.data))
            .catch(error => console.error(error))
    }, [])

    // useEffect(() => {
    //     populateProjects()
    // }, [])

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
            <Carousel
                carouselId="Carousel-2"
                className="white-text center"
                options={{
                    fullWidth: true,
                    indicators: true
                }}
            >
                {projects.map((project, index) => (
                    <div key={index} style={{ backgroundImage: project.displayPic }}>
                        <h2>
                            {project.Title}
                        </h2>
                    </div>
                ))}
            </Carousel>
            <Carousel
                carouselId="Carousel-2"
                className="white-text center"
                options={{
                    fullWidth: true,
                    indicators: true
                }}
            >
                {projects.map((project, index) => (
                    <div key={index} style={{ backgroundImage: project.displayPic }}>
                        <h2>
                            {project.Title}
                        </h2>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ProjectCarousel
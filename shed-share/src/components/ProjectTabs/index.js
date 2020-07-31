import React, { useEffect, useState } from "react";
import M, { Tabs, Tab } from 'react-materialize'
import ImageUploader from 'react-images-upload';
import API from "../../utils/API";
import ProjectTimeLine from "../ProjectTimeLine";
import "./style.css"

// http://react-materialize.github.io/react-materialize/?path=/story/javascript-tabs--swipeable-tabs 

function ProjectTabs() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
      API.getProjectList()
      .then(results => setProjects(results.data))
      .catch(error => console.error(error))
  }, [])

  console.log({projects})

  if (projects.length <= 0){ return <div></div> }

  return (
    <Tabs
      id="ProjectTabs"
      className=""
      style={{height: "100%"}}
      options={{
        swipeable: true
      }}
    >
      {projects.map((project, index) => {
        return (
          <Tab
            style={{height: "100%"}}
            key={index}
            className="white"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={project.title}
          >
            <ProjectTimeLine project={project}></ProjectTimeLine>
          </Tab>
        )
      })}
    </Tabs>
  )

}

export default ProjectTabs
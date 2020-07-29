import React, { useEffect, useState } from "react";
import M, { Tabs, Tab } from 'react-materialize'
import ImageUploader from 'react-images-upload';
import API from "../../utils/API";
import ProjectTimeLine from "../ProjectTimeLine";
import "./style.css"

// http://react-materialize.github.io/react-materialize/?path=/story/javascript-tabs--swipeable-tabs 

function ProjectTabs() {

  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    await API.getProjectList()
      .then(results => setProjects(results.data))
      .catch(error => console.error(error))
  }, [])

  console.log({projects})

  if (projects.length <= 0){ return <div></div> }

  return (
    <Tabs
      id="ProjectTabs"
      className="tab-demo z-depth-1"
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
            <ProjectTimeLine key={project._id} steps={project.steps}></ProjectTimeLine>
            <button className="btn">Add another step</button>
          </Tab>
        )
      })}
    </Tabs>
  )

}

export default ProjectTabs
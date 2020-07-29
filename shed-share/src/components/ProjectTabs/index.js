import React, { useEffect, useState } from "react";
import M, { Carousel, Icon } from 'react-materialize'
import ImageUploader from 'react-images-upload';
import API from "../../utils/API";

// http://react-materialize.github.io/react-materialize/?path=/story/javascript-tabs--swipeable-tabs 

function ProjectTabs() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.getProjectList()
      .then(results => setProjects(results.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <Tabs
      className="tab-demo z-depth-1"
      options={{
        swipeable: true
      }}
    >
      {projects.map((project, index) => {
        <Tab
          //className="blue"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false
          }}
          title={project.Title}
        >
        </Tab>
      })}
    </Tabs>
  )

}
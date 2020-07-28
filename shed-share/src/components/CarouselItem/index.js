import React from "react";

function CarouselIten({project}) {

    return (
        <div key={project._id} style={{ backgroundImage: project.displayPic }}>
            <h2>
                {project.Title}
            </h2>
        </div>
    )
}

export default CarouselIten
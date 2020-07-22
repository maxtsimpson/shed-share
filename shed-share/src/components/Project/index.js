import React, { useEffect, useState } from "react";
import M, { Navbar, Icon, NavItem } from 'react-materialize'
import ImageUploader from 'react-images-upload';

function Project() {

    const [picture, setPicture] = useState();

    const onDrop = (picture) => {
        console.log({picture})
        setPicture(picture);
    }

    return (
        <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
    )
}

export default Project
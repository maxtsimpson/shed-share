import React, { useEffect } from "react";
import { Card, CardTitle, Icon } from 'react-materialize'

const NewsItem = post => {
    let { _id, title, body, videoLink, img } = post
    if (!img) {
        img = "https://materializecss.com/images/sample-1.jpg"
    }

    return (
        <Card
            key={_id}
            actions={
                videoLink &&
                [
                    <a key="1" href={videoLink}>see the video here!</a>
                ]
            }
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={img}>{title && <p>title</p>}</CardTitle>}
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
        >
            {body}
        </Card>
    )
}

export default NewsItem;
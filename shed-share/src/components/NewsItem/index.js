import React, { useEffect } from "react";
import { Card, CardTitle, Icon } from 'react-materialize'

const NewsItem = ({ item }) => {
    console.log({item})
    let { _id, title, body, videoLink, img, user_id } = item
    if (!img) {
        img = "https://materializecss.com/images/sample-1.jpg"
    }

    let base64Flag = 'data:image/jpeg;base64,';


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
            header={<CardTitle image={user_id.avatar}>{title && <p>title</p>}</CardTitle>}
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
        >
            {body}
        </Card>
    )
}

export default NewsItem;
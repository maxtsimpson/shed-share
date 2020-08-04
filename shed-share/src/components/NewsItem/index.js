import React, { useEffect, useState } from "react";
import base64 from 'react-native-base64'
import { Card, CardTitle, Icon } from 'react-materialize'
import './style.css'

const NewsItem = ({ item }) => {
    console.log({ item })

    let { _id, title, body, videoLink, user_id, img } = item

    const base64Flag = 'data:image/jpeg;base64,'
    const [image, setImage] = useState("https://materializecss.com/images/sample-1.jpg")

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        const base64string = base64.encode(binary);
        console.log({ base64string })
        return base64string
    };

    useEffect(() => {
        if (img) {
            console.log("image exists converting to base64")
            const imageStr = arrayBufferToBase64(img)
            console.log({ imageStr })
            setImage(base64Flag + imageStr)
        } else {
            if (user_id.avatar) {
                setImage(user_id.avatar)
            }
        }
    }, [])


    return (
        <Card
            key={_id}
            className='valign-wrapper'
            actions={
                videoLink &&
                [
                    <a key="1" href={videoLink}>see the video here!</a>
                ]
            }
            closeIcon={<Icon>close</Icon>}
            header={
                <>
                    <div style={{"flexDirection": "column"}}>
                        <CardTitle image={image} ></CardTitle>
                        <p className="center-align">{`${user_id.firstName} ${user_id.lastName}`}</p>
                    </div>
                </>
            }
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
        >
            {title && <h5 className="center-align">{title}</h5>}
            {body}
        </Card>
    )
}

export default NewsItem;
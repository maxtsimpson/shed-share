import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import API from "../utils/API";
import { Row } from 'react-materialize'

const NewsFeed = props => {

    const [newsItems, setNewsItems] = useState([])

    useEffect(() => {
        API.getNewsPosts()
            .then((results) => {
                setNewsItems(results)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <Row>
            {/* {newsItems.map((item) => {
                <NewsItem item={item}></NewsItem>
            })} */}
        </Row>
    )
}

export default NewsFeed;
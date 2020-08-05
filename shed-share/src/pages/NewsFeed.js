import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import API from "../utils/API";
import { Row } from 'react-materialize'

const NewsFeed = props => {
    const [newsItems, setNewsItems] = useState([])

    useEffect(() => {
        API.getNewsPosts()
            .then((results) => {
                setNewsItems(results.data)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <Row id="NewsFeed">
            {newsItems.map((item) => <NewsItem key={item._id} item={item}></NewsItem>)}
        </Row>
    )
}

export default NewsFeed;
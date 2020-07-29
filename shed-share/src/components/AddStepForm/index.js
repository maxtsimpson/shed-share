import React, { useEffect, useState } from "react";
import M, { Col, Card, CardTitle, TextInput, Button, Row } from 'react-materialize'
import ImageUploader from 'react-images-upload';
import API from "../../utils/API";

function AddStepForm({ project }) {

    const [img, setImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
    }, [])

    const addStepToProject = () => {
        // API.getProjectList()
        //     .then(results => setProjects(results.data))
        //     .catch(error => console.error(error))
    }

    return (
        <Row>
            <Col s={12}>
                <Row>
                    <Col s={12}>
                        <TextInput
                        value={description}
                        onChange={event => {
                            setDescription(event.target.value);
                          }}
                        placeholder="description"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                        <TextInput></TextInput>
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                        <TextInput></TextInput>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

}

export default AddStepForm
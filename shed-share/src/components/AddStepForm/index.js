import React, { useEffect, useState } from "react";
import M, { Col, TextInput, Row, Select, Button } from 'react-materialize'
import ImageUploader from 'react-images-upload';
import API from "../../utils/API";
import './style.css'

const timeLineColor = '#212121'

function AddStepForm({ addStepToProject }) {

    const [img, setImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
    }, [])

    return (
        <Row>
            <Col s={12}>
                <Row>
                    <Col s={12}>
                        <Select
                            id="Select-9"
                            multiple={false}
                            className="center"
                            onChange={event => {
                                setCategory(event.target.value);
                            }}
                            options={{
                                classes: '',
                                dropdownOptions: {
                                    alignment: 'left',
                                    autoTrigger: true,
                                    closeOnClick: true,
                                    constrainWidth: true,
                                    coverTrigger: true,
                                    hover: false,
                                    inDuration: 150,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 250
                                }
                            }}
                            value=""
                        >
                            <option
                                disabled
                                value=""
                            >
                                Choose the category
                            </option>
                            <option value="Research">
                                Research
                            </option>
                            <option value="Design">
                                Design
                            </option>
                            <option value="Build">
                                Build
                            </option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                        <TextInput
                            value={description}
                            className="left"
                            onChange={event => {
                                setDescription(event.target.value);
                            }}
                            placeholder="description"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col s={8} pull="1">
                        <Button
                            onClick={(event) => {
                                event.preventDefault()
                                addStepToProject(
                                    {
                                        description: description,
                                        category: { title: category },
                                    })
                            }}>
                                Add</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

}

export default AddStepForm
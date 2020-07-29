import React, { useEffect, useState } from "react";
import M, { Col, TextInput, Row, Select, MaterialIcon } from 'react-materialize'
import ImageUploader from 'react-images-upload';
import API from "../../utils/API";

const timeLineColor = '#212121'

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
                        <Select
                            id="Select-9"
                            multiple={false}
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
                                {/* <MaterialIcon icon="design_services" color={timeLineColor}></MaterialIcon><p> Research</p> */}
                                Research
                            </option>
                            <option value="Design">
                                {/* <MaterialIcon icon="design_services" color={timeLineColor}></MaterialIcon><p> Design</p> */}
                                Design
                            </option>
                            <option value="Build">
                                {/* <MaterialIcon icon="construction" color={timeLineColor}></MaterialIcon><p> Build</p> */}
                                Build
                            </option>
                        </Select>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

}

export default AddStepForm
import React, { useEffect, useState } from "react";
import M, { Modal, Button} from 'react-materialize'
import ImageUploader from 'react-images-upload';
import API from "../../utils/API";
import AddStepForm from "../AddStepForm";

// http://react-materialize.github.io/react-materialize/?path=/story/javascript-tabs--swipeable-tabs 

function AddStepButton({project}) {

    useEffect(() => {
    }, [])

    const addStepToProject = () => {
        // API.getProjectList()
        //     .then(results => setProjects(results.data))
        //     .catch(error => console.error(error))
    }

    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Add A Step"
            id="Modal-0"
            open={false}
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<Button node="button">Add another step</Button>}
        >
            <AddStepForm></AddStepForm>
        </Modal>
    )

}

export default AddStepButton
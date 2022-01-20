import React from "react";
import {Button, Badge, Form} from "react-bootstrap";
import SampleContext from "../Context/SampleContext";
import {Modal} from 'react-bootstrap';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreateJob = () => {
    return (
        <SampleContext.Consumer children={context => (

            <div>
                <Button variant="primary" onClick={context.setModalShow}>
                    <i className="fa fa-plus mr-3"/>
                    {context.state.titleNewJob}
                </Button>


                {
                    context.state.modalShow ?
                        <Modal
                            size="lg"
                            contentClassName="text-right"
                            backdropClassName="text-right"
                            show={context.state.modalShow}
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header>
                                <Modal.Title id="contained-modal-title-vcenter" className="mx-auto">
                                    <Badge bg="warning" pill className=" d-block">
                                        <h4 className="fas fa-magic m-5 text-white"></h4>
                                    </Badge>
                                    <h2 className="text-secondary">ثبت وظیفه</h2>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={event => event.preventDefault()}>
                                    <Form.Group className="mb-3">

                                        <Form.Control type="text" className="w-50 float-right text-right" name="name"
                                                      placeholder="عنوان وظیفت رو اینجا بنویس"
                                                      onChange={context.setJobName}
                                                      value={context.state.newJob}/>

                                    </Form.Group>

                                    <Form.Group className="w-50 float-left pr-5">
                                        <h6 className="text-secondary d-inline float-right pl-4">انتخاب رنگ</h6>
                                        <input type="color" id="favcolor" name="color" onChange={context.setJobColor}
                                        />
                                    </Form.Group>


                                    <Form.Group className="mt-5 mb-2 clearfix d-inline-block w-100 text-right">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            placeholder={"توضیحات وظیفه"}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                context.setJobDescription(data)

                                            }}

                                        />
                                    </Form.Group>
                                </Form>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={context.setModalShow}>بستن</Button>
                                <Button variant="success" type="submit" onClick={context.handleSaveJobs}>ثبت</Button>

                            </Modal.Footer>
                        </Modal> : ""}

            </div>
        )}/>


    )
}
export default CreateJob;

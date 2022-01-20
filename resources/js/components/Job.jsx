import React from 'react';
import SampleContext from "../Context/SampleContext";
import {Card} from "react-bootstrap";

const Job = () => {
    return (
        <SampleContext.Consumer children={context => (

            context.state.jobs.map(job => {
                return (
                    <div className="pl-5">
                        <Card
                            style={{width: '18rem', backgroundColor: `${job.color}`}}
                            className="mx-3 mt-3 mb-3 float-right ">
                            <Card.Header>{job.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <div dangerouslySetInnerHTML={{ __html: job.description}}>

                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        )}/>
    )
}


export default Job;

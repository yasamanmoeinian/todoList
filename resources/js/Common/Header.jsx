import React from 'react';
import {Alert, Badge} from 'react-bootstrap'
import SampleContext from '../Context/SampleContext'

const Header = () => {

    const bgBadge = (job) => {
        let color = "";
        if (job <= 3) {
            color = "success"
        } else if (job <= 3 && job >= 6) {
            color = "warning"
        } else
            color = "danger"

        return color;
    }
    return (

        <SampleContext.Consumer children={context => (<div>
            <Alert variant="info">
                <h3>{context.state.title}</h3>
            </Alert>

            <Alert variant="light">
                <h6>تعداد وظایف انجام نشده:
                    <Badge pill bg={bgBadge(context.state.jobs.length)} text="white">
                        {context.state.jobs.length}
                    </Badge>
                </h6>
            </Alert>
        </div>)}/>

    )
}
export default Header;

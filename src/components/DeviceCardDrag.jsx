import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../styles/devicecard.css';
import strings from '../resources/strings.js'

export default function DeviceCardDrag(props) {
    return (
        <div className="device-card">
            <Card
                className="device-card">
                <CardBody>
                    <CardTitle tag="h4" className="device-card-name">
                        { props.device.name }
                    </CardTitle>
                    <CardSubtitle tag="h5" className="device-card-type">
                        { props.device.type }
                    </CardSubtitle>
                    <div className="d-flex my-1 justify-content-end">
                            <Button
                                className="device-card-link">
                                    { strings.OPEN_DEVICE_DETAILS }
                            </Button>
                        </div>
                </CardBody>
            </Card>
        </div>
    )
}
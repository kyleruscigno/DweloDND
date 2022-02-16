import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useDraggable } from '@dnd-kit/core';
import DeviceComments from './DeviceComments';
import DeviceInfo from './DeviceInfo';
import '../styles/devicecard.css';
import strings from '../resources/strings.js'


export default function DeviceCard(props) {
    const [showModal, setShowModal] = useState(false);
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: props.device.id,
        data: {
            device: props.device,            
        },
    });

    function toggleModal(e) {
        e.preventDefault();
        e.stopPropagation();
        setShowModal((prev) => !prev);
    }

    return (
        <React.Fragment>
            <div ref={setNodeRef} {...listeners} {...attributes}>
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
                                onMouseDown={ (e) => toggleModal(e) }
                                className="device-card-link">
                                    { strings.OPEN_DEVICE_DETAILS }
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <Modal
                isOpen={ showModal }>
                <ModalHeader>
                    <span className="device-detail-name">{ props.device.name }</span>
                    <span className="device-detail-type">{ props.device.type }</span>
                </ModalHeader>
                <ModalBody>
                    <DeviceInfo device={ props.device } />
                    <DeviceComments comments={ props.device.comments } />
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={ (e) => toggleModal(e) }>
                            { strings.CLOSE_BUTTON }
                    </Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
        
    )
}
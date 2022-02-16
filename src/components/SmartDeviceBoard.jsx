import React, { useState, useEffect } from 'react';
import { transformDeviceData, prepareDeviceGroups } from '../logic/datafilters';
import { moveDevice } from '../logic/devicehelpers';
import DeviceGroup from './DeviceGroup';
import DeviceCardDrag from './DeviceCardDrag';
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import '../styles/smartdeviceboard.css';

const dummyURL = 'https://gist.githubusercontent.com/mikekwright/691f1eb79b506bc278c289fac0c7176f/raw/d8cf60a6ca110c01bfba596bc534187c4f64a529/data.json';

export default function SmartDeviceBoard() {
    const [deviceGroups, setDeviceGroups] = useState(null);
    const [activeId, setActiveId] = useState(null);
    const [activeDevice, setActiveDevice] = useState(null);
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        }),
    );

    //Retrieve Smart Device Data
    useEffect(() => {
        fetch(dummyURL)
        .then(res => res.json())
        .then(data => {
            setDeviceGroups(
                prepareDeviceGroups(transformDeviceData(data.devices))
            );
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    function handleDragStart(event) {
        setActiveId(event.active.id);
        setActiveDevice(event.active.data.current.device);
    }

    function handleDragCancel() {
        setActiveId(null);
        setActiveDevice(null);
    }

    function handleDragEnd(event) {
        //abort if no container dragged over
        if (!event.over) {
            setActiveId(null);
            setActiveDevice(null);
            return;
        }
        
        const prevContainer = activeDevice?.status;
        const overContainer = event.over.id;

        if(prevContainer !== overContainer) {
            setDeviceGroups((prevDeviceGroups) => {
                return moveDevice(prevDeviceGroups, activeDevice, prevContainer, overContainer);
            });
            setActiveDevice((device) => {
                return {
                    ...device,
                    status: overContainer,
                }
            });
        }

        setActiveId(null);
        setActiveDevice(null);
    }

    return (
        <div className='smart-device-board d-flex justify-content-center align-items-center'>
            <DndContext
                onDragStart={ handleDragStart }
                onDragCancel={ handleDragCancel }
                onDragEnd={ handleDragEnd }
                sensors={ sensors }
                >
                    {deviceGroups && Object.keys(deviceGroups).map((status) => (
                        <DeviceGroup 
                            key={ status }
                            status={ status }
                            devices={ deviceGroups[status] }
                            />
                    ))}
                    <DragOverlay>
                        {activeDevice ? (
                            <DeviceCardDrag device={ activeDevice } />
                        ): null}
                    </DragOverlay>
            </DndContext>
        </div>
    )
}
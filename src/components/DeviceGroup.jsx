import React from 'react';
import DeviceCard from './DeviceCard';
import { useDroppable } from '@dnd-kit/core';
import '../styles/devicegroup.css';
import classNames from 'classnames';

export default function DeviceGroup(props) {
    const {isOver, setNodeRef} = useDroppable({
        id: props.status,
    });

    return (
        <div ref={setNodeRef} className={classNames('device-group', { 'device-group-hover' : isOver})}>
            <h2>{ props.status }</h2>
            <div className="device-list">
                {props.devices?.map((device) => (
                    <DeviceCard
                        key={ device.id }
                        device={ device } />
                ))}
            </div>
        </div>
    )
}
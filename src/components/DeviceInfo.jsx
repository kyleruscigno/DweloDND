import React from 'react';
import '../styles/deviceinfo.css';

export default function DeviceInfo(props) {
    return (
        <ul className="device-info">
            {Object.keys(props.device).map((key) => {
                if (!["name", "key", "comments"].includes(key)) {
                    if (Array.isArray(props.device[key])) {
                        return (
                            <li><span className="device-detail-bold">{ key } </span>{ props.device[key].join(" , ") }</li>
                        );
                    }
                    else {
                        return (
                            <li><span className="device-detail-bold">{ key } </span>{ props.device[key] }</li>
                        );
                    }
                }
            })}
        </ul>
    )
}
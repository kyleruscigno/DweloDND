import React from 'react';
import '../styles/devicecomments.css';

export default function DeviceComments(props) {
    return (
        <ul className="device-comments">
            {props.comments && props.comments.map((comment, index) => (
                    <li key={ index }><span className="device-comment-timestamp">{ new Date(comment.created_at).toLocaleDateString("en-US") +  " " + new Date(comment.created_at).toLocaleTimeString("en-US") }: </span>{ comment.comment }</li>
                ))
            }
        </ul>
    )
}
import React from 'react';
import Status from './Status';

export default function Role({ position }) {
    const displayLocation = position.location ? <span>({ position.location })</span> : null;
    return (
        <div className="d-flex">
            <h3>{ position.role } { displayLocation }</h3>
            <Status status={ position.status }/>
        </div>
    )
}

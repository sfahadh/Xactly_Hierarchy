import React from 'react';

export default function Role({ position }) {
    const displayLocation = position.location ? <span>({ position.location })</span> : null;
    return <h3>{ position.role } { displayLocation } [{ position.status }]</h3>
}

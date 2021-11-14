import React from 'react'

export default function Status({ status }) {
    let color = "white";

    switch (status) {
        case "critical":
            color = "red";
            break;
        case "warning":
            color = "yellow";
            break;
        case "normal":
            color = "green";
            break;
        default:
            color = "white";
    }

    const statusStyle = { backgroundColor: color };
    return <span className="status" style={ statusStyle }></span>
}

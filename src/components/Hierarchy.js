import React from 'react';
import hierarchyData from "../utils/hierarchyData.json";
import Role from "./Role";
import Position from "../model/Position";

export default function Hierarchy() {
    const vpRole = new Position(hierarchyData.position, hierarchyData.status, null, hierarchyData.reportees);
    
    return (
        <>
            <Role position={ vpRole } />
            { vpRole.reportees.map((managers, i) => {
                const managerRole = new Position(managers.position, managers.status, managers.region, managers.reportees);
                return (
                    <div key={i}>
                        <Role position={ managerRole } />
                        { managerRole.reportees.map((leads, j) => {
                            const leadRole = new Position(leads.position, leads.status, leads.country, leads.reportees);
                            return (
                                <div key={j}>
                                    <Role position={ leadRole } />
                                    { leadRole.reportees.map((representatives, k) => {
                                        const representativeRole = new Position(representatives.position, representatives.status, representatives.city);
                                        return (
                                            <div key={k}>
                                                <Role position={ representativeRole } />
                                            </div>
                                        )
                                    }) }
                                </div>
                            )
                        }) }
                    </div>
                )
            }) }
        </>
    )
}

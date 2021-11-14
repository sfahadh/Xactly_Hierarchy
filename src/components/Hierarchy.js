import React from 'react';
import hierarchyData from "../utils/hierarchyData.json";
import Role from "./Role";
import Position from "../model/Position";

export default function Hierarchy() {
    const vpRole = new Position(hierarchyData.position, hierarchyData.status, null, hierarchyData.reportees);
    
    return (
        <div className="container mb-5">
            <Role position={ vpRole } />
            { vpRole.reportees.map((manager, i) => {
                const managerRole = new Position(manager.position, manager.status, manager.region, manager.reportees);
                return (
                    <div key={i} className="indent">
                        <Role position={ managerRole } />
                        { managerRole.reportees.map((lead, j) => {
                            const leadRole = new Position(lead.position, lead.status, lead.country, lead.reportees);
                            return (
                                <div key={j} className="indent">
                                    <Role position={ leadRole } />
                                    { leadRole.reportees.map((representative, k) => {
                                        const representativeRole = new Position(representative.position, representative.status, representative.city);
                                        return (
                                            <div key={k} className="indent">
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
        </div>
    )
}

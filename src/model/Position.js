export default class Position {
    constructor(role, status, location = null, reportees = null) {
        this.role = role;
        this.status = status;
        this.location = location;
        this.reportees = reportees;
    }
}
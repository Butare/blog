export interface IEmployee {
    id?: number;
    employeeId?: string;
    firstname?: string;
    title?: string;
    age?: number;
    gender?: string;
}

export class Employee implements IEmployee {
    constructor(
        public id?: number,
        public employeeId?: string,
        public firstname?: string,
        public title?: string,
        public age?: number,
        public gender?: string
    ) {}
}

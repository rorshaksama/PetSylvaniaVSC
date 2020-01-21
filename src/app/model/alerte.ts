import { User } from './user';

export class Alerte {
    id: number;
    user: User;
    message: string;
    dateDisparition: Date;

    constructor() {}
}

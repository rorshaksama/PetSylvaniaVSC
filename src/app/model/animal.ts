import { User } from './User';
import { Type } from './Type';

export class Animal {
    id: number;
    user: User;
    type: Type;
    description: string;
    dateNaissance: Date;

    constructor() {}
}

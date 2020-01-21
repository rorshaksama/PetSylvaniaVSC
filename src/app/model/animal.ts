import { User } from './user';
import { Type } from './type';

export class Animal {
    id: number;
    user: User;
    type: Type;
    description: string;
    dateNaissance: Date;

    constructor() {}
}

import { User } from './User';
import { Type } from './Type';

export class Animal {
    id: number;
    nom: string;
    user: User;
    type: Type;
    description: string;
    dateNaissance: Date;
    

    constructor() {}
}

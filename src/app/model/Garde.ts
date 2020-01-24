import { User } from './User';
import { Type } from './Type';
import { Animal } from './Animal';

export class Garde {
    id: number;
    contenu: string;
    dateDébut: Date;
    dateFin: Date;
    animal: Animal;
    userGardien: User;
    constructor() { }
}

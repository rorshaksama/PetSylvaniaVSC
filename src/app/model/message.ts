import { User } from './user';

export class Message {
    id: number;
    userDestinataire: User;
    userExpediteur: User;
    contenu: string;

    constructor() { }
}
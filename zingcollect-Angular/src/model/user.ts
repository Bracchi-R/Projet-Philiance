export interface User{
    id : number;
    admin : boolean;
    nom : string;
    prenom : string;
    tel : string | null;
    mail : string;
    mdp : string;
}
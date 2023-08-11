export interface user{
    id : number;
    admin : boolean;
    nom : string;
    prenom : string;
    tel : string | null;
    mail : string;
    mdp : string;
}
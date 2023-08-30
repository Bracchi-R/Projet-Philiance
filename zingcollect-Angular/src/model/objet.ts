import { Collection } from "./collection";
import { Etat } from "./etat";


export interface Objet{
    id : number;
    collection : Collection;
    nom : string;
    image : string;
    marque : string | null;
    description : string | null;
    prixVente : number;
    etat : Etat;
}
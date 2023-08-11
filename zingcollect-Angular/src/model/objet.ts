export interface Objet{
    id : number;
    collection_id : number;
    nom : string;
    image : string;
    marque : string | null;
    description : string | null;
    prix_vente : number;
    etat_id : number | null;
}
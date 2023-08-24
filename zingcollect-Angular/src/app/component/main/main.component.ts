import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collectionService/collection.service';
import { Collection } from 'src/model/collection';
import { Objet } from 'src/model/objet';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  collectionsAleatoires: Collection[] = [];
  selectedCollection: Collection | undefined;
  objectsOfSelectedCollection: Objet[] = [];

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit(): void {
    this.loadRandomCollections();
  }
    
  loadRandomCollections() {
    const nombre = 6; // Nombre de collections aléatoires que vous voulez charger
    this.collectionService.getRandomCollections(nombre).subscribe(
      (collections: Collection[]) => {
        this.collectionsAleatoires = collections;
      },
      (error) => {
        console.log('Erreur lors du chargement des collections aléatoires:', error);
      }
    );
  }

  // Gestionnaire de clic sur une collection
  onClickCollection(collection: Collection): void {
    this.selectedCollection = collection;
    this.loadObjectsOfSelectedCollection();
  }

  // Charger les objets de la collection sélectionnée
  loadObjectsOfSelectedCollection(): void {
    if (this.selectedCollection) {
      this.collectionService.getObjectsForCollection(this.selectedCollection.id)
        .subscribe(objets => {
          this.objectsOfSelectedCollection = objets;
        });
    }
  }


  redirectToMaCollection(collectionId: number): void {
    this.router.navigate(['/ma-collection', collectionId]); // Redirige vers la route 'ma-collection' avec l'identifiant de la collection
  }




  }

 









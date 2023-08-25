import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collectionService/collection.service';
import { Collection } from 'src/model/collection';
import { Objet } from 'src/model/objet';


@Component({
  selector: 'app-les-collections',
  templateUrl: './les-collections.component.html',
  styleUrls: ['./les-collections.component.css']
})

export class LesCollectionsComponent implements OnInit {

  /* @Input() collection : Collection | undefined; */

  collections: Collection[] = []; // Tableau pour stocker les collections
   selectedCollection: Collection | undefined;
   objectsOfSelectedCollection: Objet[] = [];

  constructor(private collectionService: CollectionService, private router : Router) {}

  ngOnInit(): void {
    this.loadCollections();
  }

  loadCollections() {
    this.collectionService.getAllCollection().subscribe(
      (collections: Collection[]) => {
        this.collections = collections;
      },
      (error) => {
        console.error('Erreur lors du chargement des collections :', error);
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

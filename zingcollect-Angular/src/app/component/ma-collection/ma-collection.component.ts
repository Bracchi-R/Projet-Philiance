import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collectionService/collection.service';
import { Collection } from 'src/model/collection';
import { Objet } from 'src/model/objet';

@Component({
  selector: 'app-ma-collection',
  templateUrl: './ma-collection.component.html',
  styleUrls: ['./ma-collection.component.css']
})
export class MaCollectionComponent implements OnInit {

  selectedCollection: Collection | undefined;
  objectsOfSelectedCollection: Objet[] = [];

  constructor(private collectionService: CollectionService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const collectionId = parseInt(params.get('collectionId') || '');
      if (collectionId) {
        this.loadCollectionAndObjects(collectionId);
      }
    });
  }

  loadCollectionAndObjects(collectionId: number): void {
    this.collectionService.getCollectionById(collectionId).subscribe(collection => {
      this.selectedCollection = collection;
      this.loadObjectsOfSelectedCollection(collectionId);
    });
  }

  loadObjectsOfSelectedCollection(collectionId: number): void {
    this.collectionService.getObjectsForCollection(collectionId).subscribe(objets => {
      this.objectsOfSelectedCollection = objets;
    });
  }

  afficherInfos(objet: Objet): void {
    // Rediriger vers la route 'card-objet' en passant l'ID de l'objet dans les paramètres
    this.router.navigate(['/card-objet', objet.id]);
  }
  

  
}

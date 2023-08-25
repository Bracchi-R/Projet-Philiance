import { Component, Input, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collectionService/collection.service';
import { Collection } from 'src/model/collection';


@Component({
  selector: 'app-les-collections',
  templateUrl: './les-collections.component.html',
  styleUrls: ['./les-collections.component.css']
})

export class LesCollectionsComponent implements OnInit {

  /* @Input() collection : Collection | undefined; */

  collections: Collection[] = []; // Tableau pour stocker les collections

  constructor(private collectionService: CollectionService) {}

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
  

}

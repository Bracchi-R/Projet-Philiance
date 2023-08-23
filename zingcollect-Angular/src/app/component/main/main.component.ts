import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collectionService/collection.service';
import { Collection } from 'src/model/collection';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  collectionsAleatoires: Collection[] = [];

  constructor(private collectionService: CollectionService) { }

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


  }

 









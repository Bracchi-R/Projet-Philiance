import { Component } from '@angular/core';
import { Collection } from 'src/model/collection';
import { CollectionService } from './services/collectionService/collection.service';
import { ObjetService } from './services/objetService/objet.service';
import { Objet } from 'src/model/objet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'zingcollect-Angular';

  listCollection : Array<Collection> = [];
  ListObjet : Array<Objet> = [];

  constructor(private collectionService : CollectionService) {
  }

  ngOnInit():void{
    this.collectionService.getAllCollection().subscribe({
      next : data =>{
        this.listCollection = data;
      },
      error : err => {
        console.error(err);
      }
    });

  
  }
}

import { Component } from '@angular/core';
import { Collection } from 'src/model/collection';
import { CollectionService } from './services/collectionService/collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'zingcollect-Angular';

  listCollection : Array<Collection> = [];

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

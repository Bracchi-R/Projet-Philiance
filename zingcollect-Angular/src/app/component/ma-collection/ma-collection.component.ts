import { Component, Input, OnInit } from '@angular/core';
import { Objet } from 'src/model/objet';

@Component({
  selector: 'app-ma-collection',
  templateUrl: './ma-collection.component.html',
  styleUrls: ['./ma-collection.component.css']
})
export class MaCollectionComponent implements OnInit {
  @Input() objet : Objet | undefined;

  constructor(){}

  ngOnInit(): void {
      
  }
}

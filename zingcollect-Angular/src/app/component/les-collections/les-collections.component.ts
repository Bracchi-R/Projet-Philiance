import { Component, Input, OnInit } from '@angular/core';
import { Collection } from 'src/model/collection';


@Component({
  selector: 'app-les-collections',
  templateUrl: './les-collections.component.html',
  styleUrls: ['./les-collections.component.css']
})

export class LesCollectionsComponent implements OnInit {

  @Input() collection : Collection | undefined;

  constructor() {}

  ngOnInit(): void {
      
  }

}

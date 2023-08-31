import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjetService } from 'src/app/services/objetService/objet.service';
import { Objet } from 'src/model/objet';
import { User } from 'src/model/user';

@Component({
  selector: 'app-card-objet',
  templateUrl: './card-objet.component.html',
  styleUrls: ['./card-objet.component.css'],
})
export class CardObjetComponent implements OnInit {
  selectedObject: Objet | undefined;
  selectedCollectionId: number | undefined;
  selectedUser: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private objetService: ObjetService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'objet à partir des paramètres de l'URL
    this.route.paramMap.subscribe((params) => {
      const objectId = parseInt(params.get('id') || '');

      // Utiliser l'ID pour récupérer les détails de l'objet depuis le service
      this.objetService.getObjetById(objectId).subscribe((objet) => {
        this.selectedObject = objet;
      });
    });
  }



}

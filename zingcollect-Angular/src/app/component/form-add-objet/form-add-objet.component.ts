import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/app/services/collectionService/collection.service';
import { ObjetService } from 'src/app/services/objetService/objet.service';
import { Collection } from 'src/model/collection';
import { Etat } from 'src/model/etat';
import { Objet } from 'src/model/objet';

@Component({
  selector: 'app-form-add-objet',
  templateUrl: './form-add-objet.component.html',
  styleUrls: ['./form-add-objet.component.css'],
})
export class FormAddObjetComponent {
  public objetForm: FormGroup;
  public collection: Collection | undefined;
  public collectionId: number | undefined; // Déclaration de collectionId
  public listEtat: Array<Etat> = [];

  constructor(
    private objetService: ObjetService,
    private collectionService: CollectionService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    // Initialisation de collectionId dans le constructeur
    const collectionIdParam = this.route.snapshot.params['collectionId'];
    this.collectionId = collectionIdParam
      ? parseInt(collectionIdParam)
      : undefined;

    this.objetForm = this.formBuilder.group({
      nom: new FormControl(''),
      image: new FormControl(''),
      marque: new FormControl(''),
      description: new FormControl(''),
      prixVente: new FormControl(''),
      etat: new FormControl(''),
    });

    this.objetService.getAllEtat().subscribe({
      next: (data) => {
        this.listEtat = data;
      },
      error: (err) => {
        console.error(err);
      },
    });

    this.collectionService
      .getCollectionById(parseInt(collectionIdParam))
      .subscribe({
        next: (data) => {
          this.collection = data;
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  ajouterObjet() {
    const objetData: Objet = this.objetForm.value;
    objetData.collection = this.collection!;

    if (this.collectionId !== undefined) {
      this.objetService.addObjet(objetData).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}

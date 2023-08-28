import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ObjetService } from 'src/app/services/objetService/objet.service';


@Component({
  selector: 'app-form-add-objet',
  templateUrl: './form-add-objet.component.html',
  styleUrls: ['./form-add-objet.component.css']
})

export class FormAddObjetComponent {
  public objetForm: FormGroup;
  public collectionId: number | undefined; // Déclaration de collectionId

  constructor(
    private objetService: ObjetService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    // Initialisation de collectionId dans le constructeur
    const collectionIdParam = this.route.snapshot.params['collectionId'];
    this.collectionId = collectionIdParam ? parseInt(collectionIdParam) : undefined;

    this.objetForm = this.formBuilder.group({
      nom: new FormControl(''),
      image: new FormControl(''),
      marque: new FormControl(''),
      description: new FormControl(''),
      prix_vente: new FormControl(''),
      etat_id: new FormControl('')
    });
  }

  ajouterObjet() {
    const objetData = this.objetForm.value;
    
    if (this.collectionId !== undefined) {
      objetData.collection_id = this.collectionId; // Ajouter l'ID de la collection à l'objet
      objetData.prix_vente = parseFloat(objetData.prix_vente); // Convertir en nombre si nécessaire
      
      this.objetService.addObjet(objetData).subscribe(response => {
        console.log(objetData);
      });
    }
  }
}

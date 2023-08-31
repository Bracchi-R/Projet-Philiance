import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjetService } from 'src/app/services/objetService/objet.service';
import { Objet } from 'src/model/objet';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-objet-edit',
  templateUrl: './objet-edit.component.html',
  styleUrls: ['./objet-edit.component.css']
})
export class ObjetEditComponent implements OnInit {
  objet: Objet | undefined;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private objetService: ObjetService,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      nom: '',
      image: '',
      marque: '',
      description: '',
      prixVente: 0
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const objetId = parseInt(params.get('id') || '', 10);
      if (objetId) {
        this.objetService.getObjetById(objetId).subscribe(objet => {
          this.objet = objet;
          this.editForm.patchValue(objet);
        });
      }
    });
  }

  onSubmit(): void {
    if (confirm('Êtes-vous sûr de vouloir modifier cet objet ?')) {
      if (this.objet) {
        const updatedObjet = { ...this.objet, ...this.editForm.value };
        this.objetService.updateObjet(updatedObjet).subscribe(() => {
          // Rediriger vers la page de détails de l'objet après la modification
        });
      }
    }
    
  }
}

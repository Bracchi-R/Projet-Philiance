import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ForumComponent } from './component/forum/forum.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { CardObjetComponent } from './component/card-objet/card-objet.component';
import { ContactComponent } from './component/contact/contact.component';
import { FormAddCollectionComponent } from './component/form-add-collection/form-add-collection.component';
import { FormAddObjetComponent } from './component/form-add-objet/form-add-objet.component';
import { InfoVendeurComponent } from './component/info-vendeur/info-vendeur.component';
import { BlockLesCollectionComponent } from './component/block-les-collection/block-les-collection.component';
import { BlockMaCollectionComponent } from './component/block-ma-collection/block-ma-collection.component';
import { BlockMesCollectionsComponent } from './component/block-mes-collections/block-mes-collections.component';
import { ProfilComponent } from './component/profil/profil.component';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'forum', component: ForumComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'connection', component: ConnectionComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'card-objet/:id', component: CardObjetComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'form-collection', component: FormAddCollectionComponent},
  { path: 'form-objet', component: FormAddObjetComponent},
  { path: 'info-vendeur', component: InfoVendeurComponent},
  { path: 'les-collections' ,component: BlockLesCollectionComponent},
  { path: 'ma-collection/:collectionId', component: BlockMaCollectionComponent },
  { path: 'mes-collections', component: BlockMesCollectionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

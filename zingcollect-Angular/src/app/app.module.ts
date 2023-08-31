import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { CardObjetComponent } from './component/card-objet/card-objet.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { ContactComponent } from './component/contact/contact.component';
import { MesCollectionsComponent } from './component/mes-collections/mes-collections.component';
import { LesCollectionsComponent } from './component/les-collections/les-collections.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { ForumComponent } from './component/forum/forum.component';
import { MaCollectionComponent } from './component/ma-collection/ma-collection.component';
import { FormAddCollectionComponent } from './component/form-add-collection/form-add-collection.component';
import { FormAddObjetComponent } from './component/form-add-objet/form-add-objet.component';
import { InfoVendeurComponent } from './component/info-vendeur/info-vendeur.component';
import { TitreLesCollectionsComponent } from './component/titre-les-collections/titre-les-collections.component';
import { TitreCardObjetComponent } from './component/titre-card-objet/titre-card-objet.component';
import { TitreMaCollectionComponent } from './component/titre-ma-collection/titre-ma-collection.component';
import { BlockLesCollectionComponent } from './component/block-les-collection/block-les-collection.component';
import { BlockMaCollectionComponent } from './component/block-ma-collection/block-ma-collection.component';
import { BlockMesCollectionsComponent } from './component/block-mes-collections/block-mes-collections.component';
import { TitreMesCollectionsComponent } from './component/titre-mes-collections/titre-mes-collections.component';
import { ProfilComponent } from './component/profil/profil.component';
import { AdminComponent } from './component/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObjetEditComponent } from './objet-edit/objet-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    CardObjetComponent,
    InscriptionComponent,
    ContactComponent,
    MesCollectionsComponent,
    LesCollectionsComponent,
    ConnectionComponent,
    ForumComponent,
    MaCollectionComponent,
    FormAddCollectionComponent,
    FormAddObjetComponent,
    InfoVendeurComponent,
    TitreLesCollectionsComponent,
    TitreCardObjetComponent,
    TitreMaCollectionComponent,
    BlockLesCollectionComponent,
    BlockMaCollectionComponent,
    BlockMesCollectionsComponent,
    TitreMesCollectionsComponent,
    ProfilComponent,
    AdminComponent,
    ObjetEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

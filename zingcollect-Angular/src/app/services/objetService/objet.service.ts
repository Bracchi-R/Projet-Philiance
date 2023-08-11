import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Objet } from 'src/model/objet';

@Injectable({
  providedIn: 'root'
})
export class ObjetService {

  baseURL : string = "http://localhost:8000";

  constructor(private http:HttpClient) { }

  public addObjet(objet : Objet):Observable<Objet>{
    return this.http.post<Objet>(this.baseURL + "/objet/add", objet);
  }

  public  getAllObjet():Observable<Array<Objet>>{
    return this.http.get<Array<Objet>>(this.baseURL = "/objets/all")
  }

  public getObjetById(idObjet : number): Observable<Objet> {
    return this.http.get<Objet>(this.baseURL + "/objet/{idObjet}");
  }

  public deleteObjet(idObjet : number): Observable<Objet>{
    return this.http.delete<Objet>(this.baseURL + "/objet/{idObjet}");
  }
}

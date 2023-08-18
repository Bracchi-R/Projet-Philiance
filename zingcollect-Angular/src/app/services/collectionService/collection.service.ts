import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/model/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  baseURL : string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  public addCollection(collection : Collection):Observable<Collection>{
    return this.http.post<Collection>(this.baseURL + "/collection/add", collection);
  }

  public getAllCollection():Observable<Array<Collection>>{
    return this.http.get<Array<Collection>>(this.baseURL + "/collections/all");
  }

  public getCollectionById(idCollection : number): Observable<Collection> {
    return this.http.get<Collection>(this.baseURL + "/collection/" + idCollection);
  }

  public deleteCollection(idCollection : number): Observable<Collection>{
    return this.http.delete<Collection>(this.baseURL + "/collection/" + idCollection);
  }
}

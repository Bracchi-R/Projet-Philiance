import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL : string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  public addUser(user : User):Observable<User>{
    return this.http.post<User>(this.baseURL + "/user/add", user);
  }

  public getAllUser():Observable<Array<User>>{
    return this.http.get<Array<User>>(this.baseURL + "/users/all");
  }

  public getUserById(idUser : number): Observable<User> {
    return this.http.get<User>(this.baseURL + "/user/" + idUser);
  }

  public deleteUser(idUser : number): Observable<User>{
    return this.http.delete<User>(this.baseURL + "/user/" + idUser);
  }
}

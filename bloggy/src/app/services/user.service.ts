import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private author_url='http://103296.bloggy.ecole-it.devigne.space/authors';

  constructor(private http:HttpClient) { }

  public getAuthors():Observable<any>{
    return this.http.get(this.author_url);
  }

  
}

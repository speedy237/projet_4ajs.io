import { Injectable } from '@angular/core';
import{HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private author_url='http://103296.bloggy.ecole-it.devigne.space/authors/';
   config=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');

  constructor(private http:HttpClient) { }

  public getAuthors():Observable<any>{
    return this.http.get(this.author_url);
  }
  public getUser(id:number):Observable<any>{
    
    const url='http://103296.bloggy.ecole-it.devigne.space/authors/'+id;
    return this.http.get(url,{headers:this.config});
  }

  public newUser(user:User):Observable<any>{
    console.log('new author');
    return this.http.post<User>(this.author_url,JSON.stringify(user),{headers:this.config});
  }

  
}

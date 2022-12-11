import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private post_url='http://103296.bloggy.ecole-it.devigne.space/posts/';
  config=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');

  constructor(private http:HttpClient) { }

  public getPosts(): Observable<any>{
    return this.http.get(this.post_url);    
  }
  public getPost( id:number):Observable<any>{
    return this.http.get(`${this.post_url}/${id}`);
  }
  public addPost(p:Post){
    console.log('debut de la requette')
    //const config=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    this.http.post<Post>('http://103296.bloggy.ecole-it.devigne.space/posts/', JSON.stringify(p),{headers:this.config}).subscribe(data=>{
      console.log(data);
      console.log('process');

    }, error=>{
      console.log(error);
      alert(error)
    }
    );
  }
  public updatePost(id:number,value:Post){
    //const config=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    this.post_url=this.post_url+id+'/';
    console.log(this.post_url);
    this.http.put<Post>('http://103296.bloggy.ecole-it.devigne.space/posts/'+id,JSON.stringify(value),{headers:this.config}).subscribe(data=>{
      console.log(data);
      console.log('process');
    }, error=>{
      console.log(error);
    })

  }
  public deletePost(id:number):Observable<any>{
    console.log('process');
    const url='http://103296.bloggy.ecole-it.devigne.space/posts/'+id;
    //console.log(url);
    console.log(id);
    return this.http.delete(url,{headers:this.config});
  }
}

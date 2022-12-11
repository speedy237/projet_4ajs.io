import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post';
import { PostService } from 'src/app/services/post.service';
import {ActivatedRoute} from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  id!:number;
  post:Post=new Post();
  author:User=new User();
  idU!:number;
  list:User[]=[];

  constructor(private postService: PostService , private userService:UserService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.postService.getPost(this.id).subscribe(data=>{
      this.post=data;
      console.log(this.post);
      this.idU=this.post.author_id-1;
     // console.log('author id 2 :',this.idU);
    })
      this.getAuthor();
      console.table(this.list);
      //this.author=this.list[this.idU];
  }

  public getAuthor(){
    this.userService.getAuthors().subscribe(data=>{
      console.log('get author');
      this.list=data;
      this.author=this.list[this.idU]
      console.log(this.author)
      console.table(this.list);
    })

  }

}

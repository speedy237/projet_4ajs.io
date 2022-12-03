import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post';
import { User } from 'src/app/classes/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  userList!:User[];
  post:Post=new Post();
  posts:Post[]=[];

  constructor(private userService: UserService,private postService:PostService) { }

  ngOnInit(): void {
    this.userService.getAuthors().subscribe(data=>{
      this.userList=data;
      console.table(this.userList)
    })
  }
  public savePost(){
    
    
    this.post.created_at=new Date();
    this.postService.getPosts().subscribe(data=>{
      this.posts=data;
    })
    this.post.id=this.posts.length+1;
    console.log(this.post.author_id);
    console.log(this.post.id);

    this.postService.addPost(this.post);
    console.log('fin de la requette');
    this.post=new Post();

    

  }

}

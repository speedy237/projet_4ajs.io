import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/classes/post';
import { User } from 'src/app/classes/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  post: Post=new Post();
  userList:User[]=[];
  id!: number;

  constructor(private userService:UserService,private postService: PostService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.postService.getPost(this.id).subscribe(data=>{
      this.post=data;
    });
    this.userService.getAuthors().subscribe(data=>{
      this.userList=data;
    });

    

  }
  public updatePost(){
    console.log(this.post)
    this.postService.updatePost(this.id,this.post);

  }

}

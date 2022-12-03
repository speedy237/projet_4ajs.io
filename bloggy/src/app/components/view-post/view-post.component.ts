import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post';
import { PostService } from 'src/app/services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  id!:number;
  post!:Post;

  constructor(private postService: PostService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.postService.getPost(this.id).subscribe(data=>{
      this.post=data;
      console.log(this.post);
    })
    
  }

}

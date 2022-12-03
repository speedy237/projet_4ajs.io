import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/classes/post';
import { ConfirmationService } from 'src/app/services/confirmation.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  posts!:Post[];



  constructor(private postService:PostService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data =>{
      this.posts=data;

    })
  }
  public openConfirm(post:Post){
    console.log(post.id);
    this.confirmationService.confirm(post.title, '')
    .then((confirmed) =>  {console.log('User confirmed:', confirmed);this.postService.deletePost(post.id).subscribe(data=>{
      console.log('ok');
    })})
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }


  }



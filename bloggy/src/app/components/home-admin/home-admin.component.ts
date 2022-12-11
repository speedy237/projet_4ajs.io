import { Component, OnInit} from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/classes/post';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  posts!:Post[];
  authors!:User[];



  constructor(private postService:PostService,private userService:UserService,private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data =>{
      this.posts=data;
    })
    this.userService.getAuthors().subscribe(data=>{
      this.authors=data;
    })
    
  }
  ngAfterViewInit(): void{
    this.postService.getPosts().subscribe(data =>{
      this.posts=data;
    })
  }
  public openConfirm(post:Post){
    console.log('post id: '+post.id);
    this.confirmationService.confirm(post.title, '')
    .then((confirmed) =>  {
      console.log('Delete Post confirmed:', confirmed);
      this.postService.deletePost(post.id).subscribe( data  =>  { 
      console.log(data);
      console.log('ok')
      this.ngAfterViewInit();
    })})
    .catch(() => console.log('Post dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }


  }



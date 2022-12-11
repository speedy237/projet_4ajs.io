import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:string='';
  pass:string='';
  authors:User[]=[];

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getAuthors().subscribe(data=>{
      this.authors=data;
    })
  }

  connection():void{
    if(this.login==''||this.pass==''){
      alert('you must fill all the fields');
    }
    else {
      let val=false;
      for( var i=0;i<this.authors.length;i++){

        if(this.authors[i].full_name==this.login){
          val=true;

        }

      }
      if(val==true){
        this.router.navigateByUrl('/home')

      }
      else {
        alert('login or password are not true');
      }
    }
    

  }

}

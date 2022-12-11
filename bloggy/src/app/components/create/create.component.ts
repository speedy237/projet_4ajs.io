import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  login:string='';
  pass:string='';

  constructor(private userService: UserService,private route:Router) { }

  ngOnInit(): void {
  }
  save():void{
    if(this.login=='' || this.pass==''){
      alert("You must fill all the fields");

    }
    else {
      if(this.login!=this.pass){
        alert("Login must be equals to Password");

      }
      else {
        let author=new User();
        author.full_name=this.login;
        author.id=7;
        this.userService.newUser(author).subscribe(data=>{
          console.log("data "+data);
        })
        this.userService.getAuthors().subscribe(data=>{
          console.table(data);
        })
        //this.route.navigateByUrl('/login')

      }
    }

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';

const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"admin",component:HomeAdminComponent},
  {path:"view/:id",component:ViewPostComponent},
  {path:"post",component:NewPostComponent},
  {path:"update/:id",component:UpdatePostComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

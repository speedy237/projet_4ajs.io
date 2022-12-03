import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './components/post-list/post-list.component';
import{HttpClientModule} from '@angular/common/http';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FormsModule } from '@angular/forms';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostListComponent,
    ViewPostComponent,
    HomeAdminComponent,
    NewPostComponent,
    UpdatePostComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

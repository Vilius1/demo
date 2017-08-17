import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import 'rxjs/add/operator/toPromise';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostComponent,
    
    
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

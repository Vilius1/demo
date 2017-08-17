import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, 
  { path: 'main', component: PostComponent },
  { path: '**', redirectTo: '/main', pathMatch: 'full' },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
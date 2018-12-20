import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {PostComponent} from './post/post.component';
import {PostEditionComponent} from './post-edition/post-edition.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileEditionComponent} from './profile-edition/profile-edition.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'post', component: PostComponent},
  {path: 'postEdition/:post', component: PostEditionComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profileEdition/:profile', component: ProfileEditionComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

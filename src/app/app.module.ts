import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatNativeDateModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {HttpClientModule} from '@angular/common/http';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import { BasicDialogComponent } from './basic-dialog/basic-dialog.component';
import {ToolbarComponent} from './navigation-bar/toolbar/toolbar.component';
import {ToolbarDirective} from './navigation-bar/toolbar/toolbar.directive';
import {ToolbarEditionComponent} from './navigation-bar/toolbar/toolbar.edition.component';
import {ToolbarBasicComponent} from './navigation-bar/toolbar/toolbar.basic.component';
import { AuthService } from './services/auth.service';
import {EditionComponent} from './edition.component';
import {ToolbarMenuComponent} from './navigation-bar/toolbar/toolbar.menu.component';
import { PostComponent } from './post/post.component';
import { PostEditionComponent } from './post-edition/post-edition.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditionComponent } from './profile-edition/profile-edition.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDialogComponent,
    NavigationBarComponent,
    LoginComponent,
    DashboardComponent,
    ToolbarComponent,
    ToolbarDirective,
    ToolbarBasicComponent,
    ToolbarEditionComponent,
    ToolbarMenuComponent,
    EditionComponent,
    PostComponent,
    PostEditionComponent,
    ProfileComponent,
    ProfileEditionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'youLikeIt'),
    AngularFirestoreModule.enablePersistence(),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,
    BasicDialogComponent,
    ToolbarComponent,
    ToolbarBasicComponent,
    ToolbarEditionComponent,
    ToolbarMenuComponent,
    EditionComponent
  ]
})
export class AppModule { }

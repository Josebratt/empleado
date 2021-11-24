import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Route
import { AppRoutingModule } from './app-routing.module';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { FormComponent } from './auth/form/form.component';
import { ProfileComponent } from './auth/profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    DashboardComponent,
    RegisterComponent,
    FormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

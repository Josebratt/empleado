import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

    @Input() action: string = '';

    // Inicialize var
    email: string = '';
    password: string = '';


    constructor(public auth: AngularFireAuth, private route: Router) { }

    ngOnInit(): void {
      console.log(this.action);
    }

    registerWithGoogle(){}

    loginWithGoogle(){
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
        user =>{
          this.route.navigate(['profile']);          
        }
      );
    }

    logout() {
      this.auth.signOut();
    }

}

import { Injectable, resolveForwardRef } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string){
    return new Promise(
      (resolve, rejects) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve
          },
          (error) => {
            rejects(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string){
    return new Promise(
      (resolve, rejects) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve;
          },
          (error) => {
            rejects(error);
          }
        )
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }

}

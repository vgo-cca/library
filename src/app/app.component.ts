import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';
  
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDVYG0a2QbI3iYAFiGUSrr3j2FfNNXjFJQ",
      authDomain: "library-b284c.firebaseapp.com",
      projectId: "library-b284c",
      storageBucket: "library-b284c.appspot.com",
      messagingSenderId: "283455867462",
      appId: "1:283455867462:web:738fb29df8a192f1f9d847"
    };
    firebase.initializeApp(firebaseConfig);
  }
}

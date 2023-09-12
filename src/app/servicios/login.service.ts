import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Auth: Auth) { }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.Auth,email,password);
  }
  
  loginwithgoogle(){
    return signInWithPopup(this.Auth, new GoogleAuthProvider());
  }

  loginWithFacebook(){
    return signInWithPopup(this.Auth, new FacebookAuthProvider());
  }

  logout(){
    return signOut(this.Auth);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenUS: string;
  private url = environment.server + 'choferes.php';

  constructor(private authF:AngularFireAuth,
              private router: Router,
              private http: HttpClient) { }

 

  login(email: string, password: string){
    return new Promise((res, rejects)=> {
      this.authF.signInWithEmailAndPassword(email, password).then(user=>{
        this.tokenUS=user.user.refreshToken;
        res(user);
      }).catch(err=> rejects(err));
    });
  }

  logout(){
    this.authF.signOut().then(()=>{
      this.router.navigate(['/login']);
    });
  }


  getUserAuth(){
    return this.authF.authState;
  }

  register(email: string, password: string) {
    return new Promise((resol, reject) => {
      this.authF.createUserWithEmailAndPassword(email, password).then(res => {
        resol(res);
      }).catch(err => reject(err));
    });
  }


  updatePass(email: string){
    return new Promise((res, rejected) => {
      // this.aFauth.confirmPasswordReset('c8tKud_WC_X50UyDRhy-UmIskqr8EIC8vIL8mcvM6YsAAAF8n-MatQ', '122333');
      this.authF.sendPasswordResetEmail(email).then(pass => {
        res(pass);
      }).catch(err => rejected(err));
    });
  }
}

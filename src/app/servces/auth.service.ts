import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private auth: Auth, private router: Router) {}
  guestAccessMailAdress: string  = 'guest.access@portfolio.com';
  private user: any = null;

  loginWithInviteCode(inviteCode: string): Promise<void>{
    // Private Code
  }

  isAuthenticated(){
    // Private Code
  }

  logout(){
    // Private Code
  }
}
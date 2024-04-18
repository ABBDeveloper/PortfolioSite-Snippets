import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';import { AuthService } from '../../servces/auth.service';

@Component({
  selector: 'app-invite-code-auth',
  standalone: true,
  imports: [CommonModule, AngularFireModule, FormsModule, ReactiveFormsModule],
  templateUrl: './invite-code-auth.component.html',
  styleUrl: './invite-code-auth.component.scss'
})

export class InviteCodeAuthComponent {  
  inviteCode: string = '';
  errorMessage: string | null = null;
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.inviteCode) {
      this.authService.loginWithInviteCode(this.inviteCode)
        .catch((error) => {
          this.errorMessage = "Einladungscode ist ungültig. Bitte versuche es erneut.";
        });
    }else{
      this.errorMessage = "Einladungscode ist erforderlich."
    }
  }
}
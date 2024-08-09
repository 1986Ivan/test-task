import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  password: string = '';
  strength: string = '';
  showPassword: boolean = false;

  calculateStrength(): void {
    if (this.password.length === 0) {
      this.strength = 'empty';
    } else if (this.password.length < 8) {
      this.strength = 'too-short';
    } else if (/^[a-zA-Z]+$/.test(this.password) || /^\d+$/.test(this.password) || /^[!@#$%^&*()_+=-]+$/.test(this.password)) {
      this.strength = 'easy';
    } else if (
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+=-])(?=.*\d).*$/.test(this.password)
    ) {
      this.strength = 'strong';
    } else {
      this.strength = 'medium';
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}

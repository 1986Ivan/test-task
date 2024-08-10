import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordLevel } from "../../enums/PasswordLevelEnum";
import { StrengthClassDirective } from "../../directives/strength-class.directive";



@Component({
  selector: 'app-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, StrengthClassDirective],
  templateUrl: './password.component.html',
  styleUrl: './password.component.sass'
})
export class PasswordComponent {

  public showPassword: boolean = false;
  public passwordLevels: string[] = Object.keys(PasswordLevel);
  public passwordControl = new FormControl('');

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}

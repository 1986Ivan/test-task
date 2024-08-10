import {Injectable} from "@angular/core";
import {PasswordStrength} from "../models/PasswordStrength";
import {PasswordCssClass} from "../models/PasswordCssClass";
import {PasswordLevel} from "../enums/PasswordLevelEnum";


@Injectable({providedIn: "root"})

export class PasswordStrengthService {
  private hasOnlyNumbers = /^\d+$/;
  private hasOnlyLetters = /^[a-zA-Z]+$/;
  private hasOnlySymbols = /^[!@#$%^&*()_+=-]+$/;
  private hasAll = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+=-])(?=.*\d).*$/;

  private determinePasswordState(password: string | null): PasswordStrength {
    if (!password) {
      return 'empty';
    }

    if (password.length < 8) {
      return 'short';
    }

    if (
      this.hasOnlyNumbers.test(password) ||
      this.hasOnlySymbols.test(password) ||
      this.hasOnlyLetters.test(password)) {
      return 'easy'
    }

    if (this.hasAll.test(password)) {
      return 'strong'
    }

    return 'medium';
  }

  public getClassForStrengthLevel(password: string | null, level: string | null = ''): PasswordCssClass {

    const passwordState = this.determinePasswordState(password);

    if (level === PasswordLevel.easy) {

      if (passwordState === 'empty') {
        return 'gray';
      }

      if (passwordState === 'short' || passwordState === 'easy') {
        return 'red';
      }
    }

    if (level === PasswordLevel.medium) {

      if (passwordState === 'empty' || passwordState === 'easy') {
        return 'gray';
      }

      if (passwordState === 'short') {
        return 'red';
      }
    }

    if (level === PasswordLevel.strong) {
      if (passwordState === 'short') {
        return 'red';
      }

      if (passwordState === 'empty' || passwordState !== 'strong') {
        return 'gray';
      }
    }

    if (passwordState === 'medium' && level !== PasswordLevel.strong) {
      return 'yellow';
    }

    if (passwordState === 'strong') {
      return 'green';
    }

    return 'gray'
  }
}
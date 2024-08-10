import {Directive, HostBinding, Input, OnChanges} from "@angular/core";
import {PasswordStrengthService} from "../services/password-strength.service";


@Directive({
  selector: '[appStrengthClass]',
  standalone: true
})

export class StrengthClassDirective implements OnChanges{

  @Input() public appStrengthClass: string | null = null;
  @Input() public password: string | null  = null ;

  @HostBinding('class')
  elementClass = this.passwordStrengthService.getClassForStrengthLevel(this.password, this.appStrengthClass);

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnChanges() {
    this.elementClass = this.passwordStrengthService.getClassForStrengthLevel(this.password, this.appStrengthClass);
  }
}


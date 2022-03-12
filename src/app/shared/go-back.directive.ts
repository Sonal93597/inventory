import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appGoBack]'
})
export class GoBackDirective {

  constructor(private location: Location) { }
  @HostListener('click') handleClick(): void{
    this.location.back();
  }
}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeader]',
})
export class HeaderDirective {
  constructor(eleRef: ElementRef) {
    // console.log(eleRef.nativeElement);
    eleRef.nativeElement.style.color = '#0ccac4';
  }
}

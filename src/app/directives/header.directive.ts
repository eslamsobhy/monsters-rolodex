import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeader]',
})
export class HeaderDirective {
  constructor(private eleRef: ElementRef) {
    // console.log(eleRef.nativeElement);
    eleRef.nativeElement.style.color = '#0ccac4';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.eleRef.nativeElement.style.color = '#68e7e3';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.eleRef.nativeElement.style.color = '#0ccac4';
  }
}

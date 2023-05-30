import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHeader]',
})
export class HeaderDirective {
  @Input('appHeader') color: any;

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
    this.eleRef.nativeElement.style.color = this.color;
  }
}

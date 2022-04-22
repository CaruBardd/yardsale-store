import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  /*
  Esta directiva modificará al HTML Element de manera que cuando:
    - El mouse entre en el area se ejecute onMouseEnter(),
    - El mouse salga del area, se ejecute onMouseLeave().
  */

  // El HostListener contiene el evento que lo ejecuta.
  // onMouseEnter() convertirá el background del elemento en rojo.
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red'
  }

  // onMouseLeave eliminará el background del elemento.
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = ''
  }

  constructor(
    //Inyección de ElementRef
    private element: ElementRef
  ) {
    // this.element.nativeElement.style.backgroundColor = 'red';
   }

}

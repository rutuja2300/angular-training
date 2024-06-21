import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]',
  standalone: true
})
export class MyCustomDirectiveDirective {

  constructor(private h1:ElementRef) {h1.nativeElement.style.backgroundColor = 'yellow'; }

}

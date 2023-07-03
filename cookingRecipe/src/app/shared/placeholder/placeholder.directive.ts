import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appPlaceholder]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',

  }
})
export class PlaceholderDirective{
  constructor(public viewContainerRef : ViewContainerRef){

  }
}

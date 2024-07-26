import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  placeholder: string = 'Search by...';

  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  constructor() {}

  emitValue( value: string ) {
    this.onValue.emit( value )
  }

}

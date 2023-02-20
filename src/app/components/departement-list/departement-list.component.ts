import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.scss'],
  inputs: ['departments']
})
export class DepartementListComponent {

  @Input() data!: any;
  @Output() sendDepartementCode: EventEmitter<object> = new EventEmitter<object>()

  onClickDepartement(code: string, name: string): void
  {
    this.sendDepartementCode.emit({code: code, name: name})

  }
  constructor() { }
}

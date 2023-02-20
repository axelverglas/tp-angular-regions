import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-france-map',
  templateUrl: './france-map.component.html',
  styleUrls: ['./france-map.component.scss']
})
export class FranceMapComponent {
  @Output() sendRegionCode: EventEmitter<object> = new EventEmitter<object>()

  onClickRegion(code: string, name: string): void
  {
    console.log(code)
    console.log(name)
    this.sendRegionCode.emit({code: code, name: name})

  }

}

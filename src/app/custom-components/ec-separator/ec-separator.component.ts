import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-separator',
  styleUrls: ['./ec-separator.component.css'],
  templateUrl: './ec-separator.component.html',
})
export class EcSeparatorComponent {
  @Input('separatorName') public separatorName: string = '';
}

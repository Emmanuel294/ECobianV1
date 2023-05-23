import { AfterViewInit, Component, Input } from '@angular/core';
import { SideBarDirection, SideBarItem } from 'src/app/types/components/sideBarItem.type';

@Component({
  selector: 'ec-side-bar',
  styleUrls: ['./ec-side-bar.component.css'],
  templateUrl: './ec-side-bar.component.html',
})
export class EcSideBarComponent implements AfterViewInit {
  @Input()
  public items: Array<SideBarItem> = [];
  @Input()
  public direction: SideBarDirection = SideBarDirection.vertical;

  public flexDirection: string = 'flex-col-reverse';
  public ngAfterViewInit(): void {
    this.flexDirection = this.direction === SideBarDirection.vertical ? 'flex-col-reverse' : 'flex-row-reverse';
  }
}

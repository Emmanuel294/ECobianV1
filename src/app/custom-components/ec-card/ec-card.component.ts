import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { PersonalProjectCardComponent } from 'src/app/personal-project-card/personal-project-card.component';
import { CardT } from 'src/app/types/components/card.type';
import { DescriptionList } from 'src/app/types/interfaces/descriptionList.interface';

@Component({
  selector: 'ec-card',
  templateUrl: './ec-card.component.html',
  styleUrls: ['./ec-card.component.css']
})
export class EcCardComponent<T> implements OnInit {

  @Input('cardItem') cardItem: CardT<T> | undefined;
  @ViewChild('componentContainer', { static: true, read: ViewContainerRef }) content!: ViewContainerRef;

  constructor(
  ) { }

  ngOnInit(): void {
    this.generateContainer();
  }

  private async generateContainer(): Promise<void> {
    if (!this.cardItem) return;
    this.content.clear();
    const containerRef: ComponentRef<DescriptionList> = this.content.createComponent(PersonalProjectCardComponent);
    containerRef.instance.content = this.cardItem?.content;
  }

}

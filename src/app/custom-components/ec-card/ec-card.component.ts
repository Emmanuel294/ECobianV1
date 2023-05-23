import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CardT } from 'src/app/types/components/card.type';
import { DescriptionList } from 'src/app/types/interfaces/descriptionList.interface';
import { PersonalProjectCardComponent } from 'src/app/personal-project-card/personal-project-card.component';

@Component({
  selector: 'ec-card',
  styleUrls: ['./ec-card.component.css'],
  templateUrl: './ec-card.component.html',
})
export class EcCardComponent<T> implements OnInit {
  @Input('cardItem') public cardItem: CardT<T> | undefined;
  @ViewChild('componentContainer', { read: ViewContainerRef, static: true }) public content!: ViewContainerRef;

  public ngOnInit(): void {
    this.generateContainer();
  }

  private async generateContainer(): Promise<void> {
    if (!this.cardItem) return;
    this.content.clear();
    const containerRef: ComponentRef<DescriptionList> = this.content.createComponent(PersonalProjectCardComponent);
    containerRef.instance.content = this.cardItem?.content;
  }
}

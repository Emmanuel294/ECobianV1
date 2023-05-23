import { AfterViewInit, Component, ComponentRef, Input, OnChanges, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { Observable, of } from 'rxjs';
import { DynamicComponentI } from '../dynamicComponent/dynamicComponent.type';
import { ListValueT } from 'src/app/types/components/listValue.type';

type ListValuesMapT = {
  [key: string]: Pick<ListValueT, 'content'>;
}

@Component({
  selector: 'ec-details-list',
  styleUrls: ['./ec-details-list.component.css'],
  templateUrl: './ec-details-list.component.html',
})
export class EcDetailsListComponent implements AfterViewInit, OnChanges {
  @Input('listValues') public listValues!: Array<ListValueT>;
  @Input('defaultSelection') public defaultSelection: string = ''
  @ViewChild('listContent', { read: ViewContainerRef }) public content!: ViewContainerRef;
  @Input('dynamicComponent') public dynamicComponent!: Type<DynamicComponentI>;

  public listLabels: Array<string> = [];
  public listValuesMap: ListValuesMapT = {};

  public myListLabels$!: Observable<Array<string>>;

  public selectedItem: string | undefined = undefined;

  public async ngAfterViewInit(): Promise<void> {
    await this.delay(1000);
    this.myListLabels$ = await this.getListLabels();
    const listElement: NodeList = document.querySelectorAll('.mat-list-item-content')! as NodeList;
    if (listElement) {
      listElement.forEach(
        (element: any): void => {
          element.style.height = '100%';
        }
      );
    }
  }

  public async getListLabels(): Promise<Observable<Array<string>>> {
    this.listLabels = this.listValues.map((listValue: ListValueT): string => {
      this.listValuesMap[listValue.label] = listValue.content;
      return listValue.label;
    }
    );
    this.checkIfLoadData();
    return of(this.listLabels);
  }

  public async checkIfLoadData(): Promise<void> {
    if (this.defaultSelection.length > 0 && this.defaultSelection in this.listValuesMap && this.content) {
      await this.delay(0);
      this.generateContainer(
        this.listValuesMap[this.defaultSelection]
      );
    } else if (Object.values(this.listValuesMap).length && this.content) {
      const firstListValueName: string = this.listValues[0].label;
      this.defaultSelection = firstListValueName;
      await this.delay(0);
      this.generateContainer(this.listValuesMap[firstListValueName]);
    }
  }

  public onItemChange(event: MatSelectionListChange): void {
    const selectedOptions: Array<MatListOption> = event.source.selectedOptions.selected;
    if (selectedOptions.length) {
      const optionName: string = selectedOptions[0].value;
      this.defaultSelection = optionName;
      if (this.selectedItem && this.selectedItem === optionName) return;

      this.selectedItem = optionName;
      const content: Pick<ListValueT, 'content'> = this.listValuesMap[optionName];
      this.generateContainer(content)
    }
  }

  private async generateContainer(inputData: Pick<ListValueT, 'content'>): Promise<void> {
    this.content.clear();
    const containerRef: ComponentRef<DynamicComponentI> = this.content.createComponent(this.dynamicComponent);
    containerRef.instance.inputData = inputData;
  }

  public async delay(time: number): Promise<void> {
    return new Promise((resolve: any): any => setTimeout(resolve, time));
  }

  public async ngOnChanges(): Promise<void> {
    this.myListLabels$ = await this.getListLabels();
  }
}

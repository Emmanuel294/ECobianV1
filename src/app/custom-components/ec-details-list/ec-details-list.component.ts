import { AfterViewInit, Component, ComponentRef, Input, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { Observable, of } from 'rxjs';
import { WorkDocument } from 'src/app/entities/work.types';
import { ListValueT } from 'src/app/types/components/listValue.type';
import { WorkExperienceDetailsComponent } from 'src/app/work-experience-details/work-experience-details.component';

type ListValuesMapT = {
  [key: string]: Pick<ListValueT, 'content'>;
}

@Component({
  selector: 'ec-details-list',
  templateUrl: './ec-details-list.component.html',
  styleUrls: ['./ec-details-list.component.css'],
})
export class EcDetailsListComponent implements AfterViewInit, OnChanges {

  @Input('listValues') listValues!: Array<ListValueT>;
  @Input('defaultSelection') defaultSelection: string = ''
  @ViewChild('listContent', { static: true, read: ViewContainerRef }) content!: ViewContainerRef;

  public listLabels: Array<string> = [];
  public listValuesMap: ListValuesMapT = {};

  public myListLabels$!: Observable<Array<string>>;

  public selectedItem: string | undefined = undefined;

  constructor() { }
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

  private async generateContainer(elementToRender: Pick<ListValueT, 'content'>): Promise<void> {
    this.content.clear();
    const containerRef: ComponentRef<WorkExperienceDetailsComponent> = this.content.createComponent(WorkExperienceDetailsComponent);
    containerRef.instance.work = elementToRender as unknown as WorkDocument;
  }

  public async delay(time: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  public async ngOnChanges(): Promise<void> {
    this.myListLabels$ = await this.getListLabels();
  }

}

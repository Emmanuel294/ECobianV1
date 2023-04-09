import { AfterViewInit, Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { WorkDocument } from 'src/app/entities/work.types';
import { ListValueT } from 'src/app/types/components/listValue.type';
import { WorkExperienceDetailsComponent } from 'src/app/work-experience-details/work-experience-details.component';

type ListValuesMapT = {
  [key: string]: Pick<ListValueT, 'content'>;
}

@Component({
  selector: 'ec-details-list',
  templateUrl: './ec-details-list.component.html',
  styleUrls: ['./ec-details-list.component.css']
})
export class EcDetailsListComponent implements OnInit, AfterViewInit {

  @Input('listValues') listValues!: Array<ListValueT>;
  @Input('defaultSelection') defaultSelection: string = ''
  @ViewChild('listContent', { static: true, read: ViewContainerRef }) content!: ViewContainerRef;

  public listLabels: Array<string> = [];
  public listValuesMap: ListValuesMapT = {};

  public selectedItem: string | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getListLabels();
  }

  public getListLabels(): Array<string> {
    this.listLabels = this.listValues.map(
      (listValue: ListValueT): string => {
        this.listValuesMap[listValue.label] = listValue.content;
        return listValue.label;
      }
    );
    if (this.defaultSelection.length > 0 && this.defaultSelection in this.listValuesMap) {
      this.generateContainer(
        this.listValuesMap[this.defaultSelection]
      );
    } else if (Object.values(this.listValuesMap).length) {
      const firstListValueName: string = this.listValues[0].label;
      this.defaultSelection = firstListValueName;
      this.generateContainer(this.listValuesMap[firstListValueName]);
    }
    return this.listLabels;
  }

  public onItemChange(event: MatSelectionListChange): void {
    const selectedOptions: Array<MatListOption> = event.source.selectedOptions.selected;
    if (selectedOptions.length) {
      const optionName: string = selectedOptions[0].value;
      this.defaultSelection = optionName;
      console.log('=== optionName ec-details-list.component.ts [50] ===', optionName);
      if (this.selectedItem && this.selectedItem === optionName) return;

      this.selectedItem = optionName;
      const content: Pick<ListValueT, 'content'> = this.listValuesMap[optionName];
      this.generateContainer(content)
    }
  }

  private generateContainer(elementToRender: Pick<ListValueT, 'content'>): void {
    this.content.clear();
    const containerRef: ComponentRef<WorkExperienceDetailsComponent> = this.content.createComponent(WorkExperienceDetailsComponent);
    containerRef.instance.work = elementToRender as unknown as WorkDocument;
  }

}

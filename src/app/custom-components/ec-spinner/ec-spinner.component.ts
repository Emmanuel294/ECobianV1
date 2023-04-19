import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@UntilDestroy()
@Component({
  selector: 'ec-spinner',
  templateUrl: './ec-spinner.component.html',
  styleUrls: ['./ec-spinner.component.css']
})
export class EcSpinnerComponent implements OnInit {

  public hide: boolean = false;

  constructor(
    public readonly loaderService: LoaderService
  ) { }

  public ngOnInit(): void {
    this.loaderService.getLoadingChangesObservable()
      .pipe(
        untilDestroyed(this)
      ).subscribe(
        (isLoading: boolean): any => {
          if (!isLoading) {
            setTimeout(
              (): void => {
                this.hide = true;
              }, 2000
            )
          }
        }
      );
  }

}

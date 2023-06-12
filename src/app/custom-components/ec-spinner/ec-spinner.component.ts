import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { LoaderService } from 'src/app/services/loader/loader.service';

@UntilDestroy()
@Component({
  selector: 'ec-spinner',
  styleUrls: ['./ec-spinner.component.css'],
  templateUrl: './ec-spinner.component.html',
})
export class EcSpinnerComponent implements OnInit {
  public hide: boolean = false;

  public constructor(
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

import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading: boolean = true;

  private loadingSubject$: Subject<boolean> = new Subject();

  public setLoading(loading: boolean): void {
    this.loading = loading;
    this.loadingSubject$.next(this.loading);
  }

  public getLoading(): boolean {
    return this.loading;
  }

  public getLoadingChangesObservable(): Observable<boolean> {
    return this.loadingSubject$;
  }
}

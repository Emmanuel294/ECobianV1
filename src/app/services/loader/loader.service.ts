import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = true;

  private loadingSubject$: Subject<boolean> = new Subject();

  constructor() { }

  setLoading(loading: boolean) {
    this.loading = loading;
    this.loadingSubject$.next(this.loading);
  }

  getLoading(): boolean {
    return this.loading;
  }

  public getLoadingChangesObservable(): Observable<boolean> {
    return this.loadingSubject$;
  }

}

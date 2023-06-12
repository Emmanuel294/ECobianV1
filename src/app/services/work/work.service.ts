import { FirebaseCollections } from 'src/app/entities/firebase.types';
import { FirebaseService } from '../firebase/firebase.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkDocument } from 'src/app/entities/work.types';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  public constructor(
    private readonly firebaseService: FirebaseService
  ) { }

  public getWorksObservable(): Observable<Array<WorkDocument>> {
    return this.firebaseService.getCollectionDataObservable(FirebaseCollections.works);
  }
}

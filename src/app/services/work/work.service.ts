import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { WorkDocument } from 'src/app/entities/work.types';
import { FirebaseCollections } from 'src/app/entities/firebase.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(
    private readonly firebaseService: FirebaseService
  ) { }

  public getWorksObservable(): Observable<Array<WorkDocument>> {
    return this.firebaseService.getCollectionDataObservable(FirebaseCollections.works);
  }
}

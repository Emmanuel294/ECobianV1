import { FirebaseCollections } from 'src/app/entities/firebase.types';
import { FirebaseService } from '../firebase/firebase.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TechnologyDocument } from 'src/app/entities/technologie.types';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  public constructor(
    private readonly firebaseService: FirebaseService
  ) { }

  public getTechnologiesObservable(): Observable<Array<TechnologyDocument>> {
    return this.firebaseService.getCollectionDataObservable(FirebaseCollections.technologies);
  }
  public getTechnologiesSnapshot(): Observable<Array<TechnologyDocument>> {
    return this.firebaseService.getCollectionSnapshotWithIds(FirebaseCollections.technologies);
  }
}

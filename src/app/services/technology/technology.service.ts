import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { TechnologyDocument } from 'src/app/entities/technologie.types';
import { FirebaseCollections } from 'src/app/entities/firebase.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(
    private readonly firebaseService: FirebaseService
  ) { }

  public getTechnologiesObservable(): Observable<Array<TechnologyDocument>> {
    return this.firebaseService.getCollectionDataObservable(FirebaseCollections.technologies);
  }

}

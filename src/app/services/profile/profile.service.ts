import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { FirebaseCollections } from 'src/app/entities/firebase.types';
import { Observable, map } from 'rxjs';
import { ProfileDocument } from 'src/app/entities/profile.types';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private readonly firebaseService: FirebaseService
  ) { }

  public getProfiles(): Observable<Array<ProfileDocument>> {
    return this.firebaseService.getCollectionDataObservable(FirebaseCollections.profile);
  }
}

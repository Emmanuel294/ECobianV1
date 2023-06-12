import { FirebaseCollections } from 'src/app/entities/firebase.types';
import { FirebaseService } from '../firebase/firebase.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDocument } from 'src/app/entities/profile.types';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public constructor(
    private readonly firebaseService: FirebaseService
  ) { }

  public getProfiles(): Observable<Array<ProfileDocument>> {
    return this.firebaseService.getCollectionDataObservable(FirebaseCollections.profile);
  }

  public getProfilePicture(path: string): Observable<string> {
    return this.firebaseService.getDocumentUrl(path);
  }

  public getResume(path: string): Observable<string> {
    return this.firebaseService.getDocumentUrl(path);
  }
}

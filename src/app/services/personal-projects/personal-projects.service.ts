import { FirebaseCollections } from 'src/app/entities/firebase.types';
import { FirebaseService } from '../firebase/firebase.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalProjectDocument } from 'src/app/entities/personalProject.types';

@Injectable({
  providedIn: 'root'
})
export class PersonalProjectsService {
  public constructor(
    private readonly firebaseService: FirebaseService
  ) { }

  public getPersonalProjects(): Observable<Array<PersonalProjectDocument>> {
    return this.firebaseService.getCollectionDataObservable(FirebaseCollections.personalProjects);
  }
}

import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { PersonalProjectDocument } from 'src/app/entities/personalProject.types';
import { FirebaseCollections } from 'src/app/entities/firebase.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalProjectsService {

  constructor(
    private readonly firebaseService: FirebaseService
  ) { }

  public getPersonalProjects(): Observable<Array<PersonalProjectDocument>> {
    return this.firebaseService.getCollectionDataObservable(FirebaseCollections.personalProjects);
  }
}

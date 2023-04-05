import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseCollections } from 'src/app/entities/firebase.types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private readonly firestore: AngularFirestore
  ) { }

  public getCollectionDataObservable(object: FirebaseCollections): Observable<Array<any>> {
    return this.firestore.collection(object).valueChanges();
  }
}

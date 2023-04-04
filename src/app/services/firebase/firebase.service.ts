import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { FirebaseCollections, FirebaseDocuments } from 'src/app/entities/firebase.types';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private readonly firestore: AngularFirestore
  ) { }

  public getObjectList(object: FirebaseCollections): Observable<Array<FirebaseDocuments>> {
    return this.firestore.collection(object).snapshotChanges()
      .pipe(
        map(
          (obj: DocumentChangeAction<any>[]): Array<FirebaseDocuments> => {
            return obj.map(
              (object): any => {
                const data = object.payload.doc.data();

                return {
                  ...data
                }
              }
            )
          }
        )
      );
  }
}

import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { map, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseCollections } from 'src/app/entities/firebase.types';
import { FirebaseDocuments } from 'src/app/entities/firebase.types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public constructor(
    private readonly firestore: AngularFirestore,
    private readonly fireStoreage: AngularFireStorage
  ) { }

  public getCollectionDataObservable(object: FirebaseCollections): Observable<Array<any>> {
    return this.firestore.collection(object).valueChanges();
  }
  public getCollectionSnapshotWithIds(object: FirebaseCollections): Observable<Array<any>> {
    return this.firestore.collection(object).snapshotChanges()
      .pipe(
        map(
          (documents: Array<any>): Array<any> => {
            return documents.map(
              (doc: any): any => {
                const data: FirebaseDocuments = doc.payload.doc.data() as unknown as FirebaseDocuments;
                const id: string = doc.payload.doc.id;

                return {
                  id,
                  ...data
                };
              }
            )
          }
        )
      );
  }

  public getDocumentUrl(path: string): Observable<string> {
    const fileRef: AngularFireStorageReference = this.fireStoreage.ref(path);
    return fileRef.getDownloadURL();
  }
}

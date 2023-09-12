import { Injectable } from '@angular/core';
import {CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,} from "@firebase/firestore"

import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Usuarios {
  height: number;
  id: string;
  description: string;
  imgUrl: string;
  name: string;
  type: string;
  weight: number;
}




@Injectable({
  providedIn: 'root'
})
export class RegistroFireService {
  private UsuariosCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.UsuariosCollection = collection(this.firestore, 'Usuarios');
  }

  getAll() {
    return collectionData(this.UsuariosCollection, {
      idField: 'id',
    }) as Observable<Usuarios[]>;
  }
  

  get(id: string) {
    const usuariosDocumentReference = doc(this.firestore, `Usuarios/${id}`);
    return docData(usuariosDocumentReference, { idField: 'id' });
  }

  create(usuario: Usuarios) {
    return addDoc(this.UsuariosCollection, usuario);
  }

  update(usuario: Usuarios) {
    const usuariosDocumentReference = doc(
      this.firestore,
      `pokemon/${usuario.id}`
    );
    return updateDoc(usuariosDocumentReference, { ...usuario });
  }

  delete(id: string) {
    const usuarioDocumentReference = doc(this.firestore, `usuario/${id}`);
    return deleteDoc(usuarioDocumentReference);
  }
  
}

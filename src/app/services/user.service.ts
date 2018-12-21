import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../dtos/User';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  public loggedUser: User;

  data: User;

  private loggedIn = new BehaviorSubject<boolean>(false); // {1}


  constructor(
    private firestore: AngularFirestore
  ) {
  }

  public createUser(data: any) {
    return this.firestore.collection('users').add(data);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  public getUser(username: string, password: string): Observable<any> {

    return this.firestore.collection('users', ref =>
      ref.where('username', '==', username)
         .where('password', '==', password)).snapshotChanges();

  }

  public getUserById(id: string): Observable<any> {
    // return this.firestore.collection('users').doc(id).snapshotChanges();
    return of({name: 'Fulanito', password: '1234'});
  }

  public updateUser(id: string, user: any) {
    return this.firestore.collection('users').doc(id).set(JSON.parse(JSON.stringify(user)));
  }

  setLoggedUser(loggedUser: User): void {
    localStorage.setItem('userName', loggedUser.username);
    localStorage.setItem('password', loggedUser.password); // TODO fixit
    this.loggedUser = loggedUser;
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedUser = null;
    this.loggedIn.next(false);
  }

}

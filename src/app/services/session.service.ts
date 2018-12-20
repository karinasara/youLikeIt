import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class SessionService {

  private page = new BehaviorSubject<string>('login');

  loadingPage(page: string) {
    this.page.next(page);
  }

  getPage(): Observable<any> {
    return this.page;
  }

}

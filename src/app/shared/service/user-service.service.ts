import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  castUser = this.users.asObservable();

  constructor() {}

  addUser(newUser: string[]) {
    return this.users.next([...this.users.getValue(), ...newUser]);
  }
}

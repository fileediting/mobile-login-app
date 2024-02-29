import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  
  getUserName(): Observable<string> {
    return of('Vijay J');
  }
}
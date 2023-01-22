import { Injectable } from '@angular/core';
import { User } from '../../shared/models/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, {username, password});
  }
}

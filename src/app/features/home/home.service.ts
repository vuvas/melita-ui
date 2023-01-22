import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}
  getOffers(): Observable<any> {
    const url = `${this.BASE_URL}/offers`;
    return this.http.get<any>(url);
  }
  getSubscriptionByOffer(id:number): Observable<any> {
    const url = `${this.BASE_URL}/offers/${id}/subscriptions`;
    return this.http.get<any>(url);
  }
}

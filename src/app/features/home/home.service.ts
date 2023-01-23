import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Offer } from '../../shared/models/Offer';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}
  getOffers(): Observable<Offer[]> {
    const url = `${this.BASE_URL}/offers`;
    return this.http.get<{offers:[]}>(url).pipe(map((a:{offers:[]})=>a.offers
      .sort(
      (a:Offer, b:Offer) =>
        new Date(b.contractStartDate).getTime() -
        new Date(a.contractStartDate).getTime()
    )
    ));
  }
  getSubscriptionByOffer(id:number): Observable<any> {
    const url = `${this.BASE_URL}/offers/${id}/subscriptions`;
    return this.http.get<any>(url);
  }
}

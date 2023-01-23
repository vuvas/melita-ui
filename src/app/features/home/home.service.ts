import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Offer, OfferResponseModel } from './models/Offer';
import { SubscriptionModel, SubscriptionResponseModel } from './models/subscription';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}
  getOffers(): Observable<Offer[]> {
    const url = `${this.BASE_URL}/offers`;
    return this.http.get<OfferResponseModel>(url).pipe(map((a:OfferResponseModel)=>
      a.offers
      .sort(
      (a:Offer, b:Offer) =>
        new Date(b.contractStartDate).getTime() -
        new Date(a.contractStartDate).getTime()
    )
    ));
  }
  getSubscriptionByOffer(id:number): Observable<SubscriptionModel[]> {
    const url = `${this.BASE_URL}/offers/${id}/subscriptions`;
    return this.http.get<SubscriptionResponseModel>(url).pipe(map((response:SubscriptionResponseModel)=>response.subscriptions
      .sort(function (a:SubscriptionModel, b:SubscriptionModel) {
        if (a.name === b.name) {
          // Line is only important when names are the same
          return (b.line ?? 0) - (a.line ?? 0);
        }
        return a.name > b.name ? 1 : -1;
      })));
  }
}

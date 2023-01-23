import { Action } from '@ngrx/store';
import { SubscriptionModel } from '../../models/subscription';

export enum SubscriptionActionTypes {

  LOAD_SUBSCRIPTIONS = '[Subscription] Load Subscriptions',
  LOAD_SUBSCRIPTIONS_SUCCESS = '[Subscription] Load Subscriptions Success',
  LOAD_SUBSCRIPTIONS_FAIL = '[Subscription] Load Subscriptions Fail'
}
export class LoadSubscriptions implements Action {
  readonly type = SubscriptionActionTypes.LOAD_SUBSCRIPTIONS
  constructor(public payload: number) {}
}
export class LoadSubscriptionsSuccess implements Action {
  readonly type = SubscriptionActionTypes.LOAD_SUBSCRIPTIONS_SUCCESS
  constructor(public payload: SubscriptionModel[]) {}
}
export class LoadSubscriptionsFail implements Action {
  readonly type = SubscriptionActionTypes.LOAD_SUBSCRIPTIONS_FAIL
  constructor(public payload: string) {}
}
export type SubscriptionAction = LoadSubscriptions | LoadSubscriptionsSuccess | LoadSubscriptionsFail;

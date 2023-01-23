import { ApiBase, Usage } from './Offer';

export class SubscriptionModel {
  id!: number;
  name!: string;
  type!: string;
  line?: number;
  usage?: Array<Usage>;
}
export class SubscriptionResponseModel extends ApiBase {
  subscriptions!: Array<SubscriptionModel>;
}

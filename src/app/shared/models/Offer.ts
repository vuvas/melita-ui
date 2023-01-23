export class Offer {
  id!: number;
  name!: string;
  contractStartDate!: string;
  contractEndDate!: string;
}

export class Subscription {
  id!: number;
  name!: string;
  type!: string;
  line?: number;
  usage?: Array<Usage>;
}

export class Usage {
  type!: string;
  used!: number;
  limit!: number;
}

export class ApiBase {
  status!: number;
}

export class OfferResponseModel extends ApiBase {
  offers!: Array<Offer>;
}

export class SubscriptionModel extends ApiBase {
  subscriptions!: Array<Subscription>;
}

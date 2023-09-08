export type DashboardReponseType = {
  currentAccount: { balance: number };
  investimentAccount: { amount: number };
  creditCard: { currentInvoice: number };
};

export type AccountMovimentationResponseType = {
  movimentId: number;
  account: string;
  compensationType: string;
  description: string;
  amount: number;
};

export type OffersReponseType = {
  offers: {
    offerType: string;
    title: string;
    subtitle: string;
    amount: number;
  }[];
};

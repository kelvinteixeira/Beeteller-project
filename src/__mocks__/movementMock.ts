import { AccountMovimentationResponseType } from "../Global/types";

export const movementMock: AccountMovimentationResponseType[] = [
  {
    movimentId: 1,
    account: "CURRENT",
    compensationType: "DEBIT",
    description: "Pix realizado para fulano",
    amount: 100,
  },
  {
    movimentId: 2,
    account: "INVESTIMENT",
    compensationType: "CREDIT",
    description: "Rendimento tesouro selic",
    amount: 1000,
  },
  {
    movimentId: 3,
    account: "INVESTIMENT",
    compensationType: "CREDIT",
    description: "Rendimento de fundo imobiliário 127V4",
    amount: 1000,
  },
];

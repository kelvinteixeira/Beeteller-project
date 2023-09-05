import { formatCurrencyBRL } from "../../../utils/currency";
import {
  StyledBox,
  StyledCardTitle,
  StyledCardValue,
  StyledCardMovimentation,
} from "../AccountMovimentation.styles";
import blackWalletSVG from "../../../assets/blackwallet.svg";
import blackInvestimentSVG from "../../../assets/blackInvestment.svg";

type AccountMovimentationProps = {
  movimentId: number;
  account: string;
  compensationType: string;
  description: string;
  amount: number;
};

export const CardMovimentation = (props: AccountMovimentationProps) => {
  return (
    <StyledCardMovimentation
      
      className={"card-movimentation"}
      key={props.movimentId}
    >
      <StyledBox>
        <img
          style={{
            width: 24,
          }}
          src={
            props.account === "CURRENT" ? blackWalletSVG : blackInvestimentSVG
          }
        />

        <StyledCardTitle sx={{ marginLeft: 1, lineHeight: 2 }}>
          {props.account === "CURRENT"
            ? "Conta corrente"
            : "Conta investimento"}
        </StyledCardTitle>
      </StyledBox>

      <StyledCardTitle sx={{ lineHeight: 2 }}>
        {props.description}
      </StyledCardTitle>

      <StyledCardValue
        sx={{ lineHeight: 2 }}
        className={
          props.compensationType === "CREDIT"
            ? "positive-value"
            : "negative-value"
        }
      >
        {props.compensationType === "CREDIT" ? "+ " : "- "}
        R$ {formatCurrencyBRL(props.amount)}
      </StyledCardValue>
    </StyledCardMovimentation>
  );
};

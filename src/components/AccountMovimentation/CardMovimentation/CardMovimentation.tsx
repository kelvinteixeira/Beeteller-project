import { formatCurrencyBRL } from "../../../utils/currency";
import {
  StyledBox,
  StyledCardTitle,
  StyledCardValue,
  StyledCardMovimentation,
  StyledCardSubtitle,
} from "./CardMovimentation.styles";
import blackWalletSVG from "../../../assets/blackwallet.svg";
import blackInvestimentSVG from "../../../assets/blackInvestment.svg";
import {
  AccountTypeEnum,
  CompensationTypeEnum,
} from "../../../Global/constants";
import { useMediaQuery } from "@mui/material";

type AccountMovimentationProps = {
  movimentId: number;
  account: string;
  compensationType: string;
  description: string;
  amount: number;
};

export const CardMovimentation = (props: AccountMovimentationProps) => {
  const isSmallScreen = useMediaQuery("(max-width:450px)");

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
            props.account === AccountTypeEnum.CURRENT
              ? blackWalletSVG
              : blackInvestimentSVG
          }
        />
        <StyledCardTitle sx={{ marginLeft: 1, lineHeight: 2 }}>
          {props.account === AccountTypeEnum.CURRENT
            ? "Conta corrente"
            : "Conta investimento"}
        </StyledCardTitle>
      </StyledBox>

      <StyledCardSubtitle sx={{ lineHeight: 2 }}>
        {props.description}
      </StyledCardSubtitle>

      <StyledCardValue
        sx={{ lineHeight: 2 }}
        className={
          props.compensationType === CompensationTypeEnum.CREDIT
            ? "positive-value"
            : "negative-value"
        }
      >
        {props.compensationType === CompensationTypeEnum.CREDIT ? "+ " : "- "}
        R$ {formatCurrencyBRL(props.amount)}
      </StyledCardValue>
    </StyledCardMovimentation>
  );
};

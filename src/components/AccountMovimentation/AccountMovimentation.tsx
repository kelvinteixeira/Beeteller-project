import { ReactNode, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  GridStyled,
  StyledTitle,
  StyledSubtitle,
  CardMovimentation,
  StyledBox,
  StyledCardTitle,
  StyledCardValue,
} from "./AccountMovimentation.styles";

import { api } from "../../lib/axios";
import { formatCurrencyBRL } from "../../utils/currency";

import blackWalletSVG from "../../assets/blackwallet.svg";
import blackInvestimentSVG from "../../assets/blackInvestment.svg";

type AccountMovimentationItems = {
  id: number;
  account: string;
  compensationType: string;
  description: string;
  amount: number;
  icon: ReactNode;
};

export const AccountMovimentation = () => {
  const [data, setData] = useState<Array<AccountMovimentationItems>>([]);

  useEffect(() => {
    api.get("/movement").then((response) => setData(response.data));
  }, []);
  return (
    <Grid>
      <GridStyled>
        <Grid container alignItems={"center"}>
          <StyledTitle>Conta digital</StyledTitle>
          <StyledSubtitle>&nbsp; Últimas movimentações</StyledSubtitle>
        </Grid>
      </GridStyled>
      {data.map((item) => (
        <CardMovimentation
          key={item.id}
          container
          alignContent={"center"}
          justifyContent={"space-between"}
        >
          <StyledBox>
            <img
              src={
                item.account === "CURRENT"
                  ? blackWalletSVG
                  : blackInvestimentSVG
              }
            />
            <StyledCardTitle sx={{ marginLeft: 1, lineHeight: 2 }}>
              {item.account === "CURRENT"
                ? "Conta corrente"
                : "Conta investimento"}
            </StyledCardTitle>
          </StyledBox>
          <StyledCardTitle sx={{ lineHeight: 2 }}>
            {item.description}
          </StyledCardTitle>
          <StyledCardValue
          sx={{ lineHeight: 2 }}
            className={
              item.compensationType === "CREDIT"
                ? "positive-value"
                : "negative-value"
            }
          >
            {item.compensationType === "CREDIT" ? "+ " : "- "}
            R$ {formatCurrencyBRL(item.amount)}
          </StyledCardValue>
        </CardMovimentation>
      ))}
    </Grid>
  );
};

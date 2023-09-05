import { ReactNode, useEffect, useState } from "react";
import { Grid, Skeleton } from "@mui/material";
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
  movimentId: number;
  account: string;
  compensationType: string;
  description: string;
  amount: number;
  icon: ReactNode;
  isLoading?: boolean;
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
          className={"card-movimentation"}
          key={item.movimentId}
        >
          <StyledBox>
            <img
            style={{
              width: 24
            }}
              src={
                item.account === "CURRENT"
                  ? blackWalletSVG
                  : blackInvestimentSVG
              }
            />

            {!data ? (
              <Skeleton
                animation="wave"
                variant="text"
                width={80}
                sx={{ marginLeft: 1 }}
              />
            ) : (
              <StyledCardTitle sx={{ marginLeft: 1, lineHeight: 2 }}>
                {item.account === "CURRENT"
                  ? "Conta corrente"
                  : "Conta investimento"}
              </StyledCardTitle>
            )}
          </StyledBox>
          {!data ? (
            <Skeleton animation="wave" variant="text" width="30%" />
          ) : (
            <StyledCardTitle sx={{ lineHeight: 2 }}>
              {item.description}
            </StyledCardTitle>
          )}
          {!data ? (
            <Skeleton animation="wave" variant="text" width="10%" />
          ) : (
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
          )}
        </CardMovimentation>
      ))}
    </Grid>
  );
};

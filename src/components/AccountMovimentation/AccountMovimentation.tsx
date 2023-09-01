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
import walletSVG from "../../assets/blackwallet.svg";
import { useState } from "react";

export const AccountMovimentation = () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <GridStyled>
        <Grid container alignItems={"center"}>
          <StyledTitle>Conta digital</StyledTitle>
          <StyledSubtitle>&nbsp; Últimas movimentações</StyledSubtitle>
        </Grid>
      </GridStyled>
      <CardMovimentation
        container
        alignContent={"center"}
        justifyContent={"space-between"}
      >
        <StyledBox>
          <img src={walletSVG} />
          <StyledCardTitle sx={{ marginLeft: 1, lineHeight: 2 }}>
            Conta corrente
          </StyledCardTitle>
        </StyledBox>
        <StyledCardTitle sx={{ lineHeight: 2 }}>Pagemento de boleto via Pix</StyledCardTitle>
        <StyledCardValue
          className={value ? "positive-value" : "negative-value"}
        >
          + R$ 3000,00
        </StyledCardValue>
      </CardMovimentation>
    </>
  );
};

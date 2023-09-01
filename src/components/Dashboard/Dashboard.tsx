import { useState, useEffect } from "react";

import { DashboardCard } from "../../components/DashboardCard/DashboardCard";

import { Grid } from "@mui/material";
import { StyledTypography, CustomerName, GridStyled } from "./Dashboard.styles";

import { api } from "../../lib/axios";

import walletSVG from "../../assets/wallet.svg";
import investimentsSVG from "../../assets/investiments.svg";
import creditCardSVG from "../../assets/credit_card.svg";

type DataProps = {
  currentAccount: { balance: number };
  investimentAccount: { amount: number };
  creditCard: { currentInvoice: number };
};

export const Dashboard = () => {
  const [data, setData] = useState<DataProps | null>(null);

  useEffect(() => {
    api.get("/dashboard").then((response) => setData(response.data));
  }, []);

  return (
    <>
      <GridStyled>
        <Grid container alignItems={"center"}>
          <StyledTypography>Olá,</StyledTypography>
          <CustomerName>&nbsp;Kelvin</CustomerName>
        </Grid>
        <StyledTypography>Seja bem vindo a sua conta digital</StyledTypography>
      </GridStyled>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <DashboardCard
          showButton={false}
          width={448}
          height={244}
          title={"Conta corrente"}
          subtitle={"Saldo disponível"}
          value={data?.currentAccount.balance || 0}
          icon={<img src={walletSVG} />}
        />
        <DashboardCard
          showButton={false}
          width={344}
          height={244}
          title={"Investimentos"}
          subtitle={"Patrimônio"}
          value={data?.investimentAccount.amount || 0}
          icon={<img src={investimentsSVG} />}
        />
        <DashboardCard
          width={320}
          height={244}
          title={"Cartão"}
          showButton
          buttonSize="small"
          buttonTitle="Fatura aberta"
          subtitle={"Fatura atual"}
          value={data?.creditCard.currentInvoice || 0}
          icon={<img src={creditCardSVG} />}
        />
      </Grid>
    </>
  );
};

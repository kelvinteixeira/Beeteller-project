import { useState, useEffect } from "react";
import { DashboardCard } from "./DashboardCard/DashboardCard";
import { Grid } from "@mui/material";

import { api } from "../../lib/axios";

import walletSVG from "../../assets/wallet.svg";
import investimentsSVG from "../../assets/investiments.svg";
import creditCardSVG from "../../assets/credit_card.svg";
import { DashboardCardSkelleton } from "./DashboardCardSkelleton/DashboardCardSkelleton";

import { DashboardReponseType } from "src/Global/types";

export const Dashboard = () => {
  const [data, setData] = useState<DashboardReponseType | null>(null);

  useEffect(() => {
    api.get("/dashboard").then((response) => setData(response.data));
  }, []);

  if (!data) return <DashboardCardSkelleton />;

  return (
    <>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <DashboardCard
          width={448}
          height={244}
          title={"Conta corrente"}
          subtitle={"Saldo disponível"}
          value={data?.currentAccount.balance || 0}
          icon={<img src={walletSVG} />}
        />
        <DashboardCard
          width={344}
          height={244}
          title={"Investimentos"}
          subtitle={"Patrimônio"}
          value={data?.investimentAccount.amount || 0}
          icon={<img src={investimentsSVG} />}
        />
        <DashboardCard
          showButton
          width={320}
          height={244}
          title={"Cartão"}
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

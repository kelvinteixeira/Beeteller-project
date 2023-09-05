import { ReactNode, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  GridStyled,
  StyledTitle,
  StyledSubtitle,
} from "./AccountMovimentation.styles";

import { api } from "../../lib/axios";
import { CardMovimentationSkelleton } from "../AccountMovimentation/CardMovimentation/CardMovimentationSkeleton";
import { CardMovimentation } from "./CardMovimentation/CardMovimentation";

type AccountMovimentationItems = {
  movimentId: number;
  account: string;
  compensationType: string;
  description: string;
  amount: number;
  icon: ReactNode;
};

// const data = [
//   {
//     movimentId: 1,
//     account: "INVESTIMENT",
//     compensationType: "CREDIT",
//     description: "Pix de fulano",
//     amount: 10000,
//   },
// ];

export const AccountMovimentation = () => {
  const [data, setData] = useState<Array<AccountMovimentationItems>>();

  useEffect(() => {
    api.get("/movement").then((response) => setData(response.data));
  }, []);

  if (!data) return <CardMovimentationSkelleton />;

  return (
    <Grid>
      <GridStyled>
        <Grid container alignItems={"center"}>
          <StyledTitle>Conta digital</StyledTitle>
          <StyledSubtitle>&nbsp; Últimas movimentações</StyledSubtitle>
        </Grid>
      </GridStyled>
      {data.map((items) => (
        <CardMovimentation
          {...items}
          key={items.movimentId}
        />
      ))}
    </Grid>
  );
};

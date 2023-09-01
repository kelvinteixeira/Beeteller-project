import { ReactNode } from "react";

import { Grid, Icon } from "@mui/material";

import {
  StyledAccountValue,
  StyledCard,
  StyledTypography,
} from "./DashboardCard.styles";
import { formatCurrencyBRL } from "../../utils/date";
import { BeetellerButton } from "../BeetellerButton/BeetellerButon";

type InfoCardProps = {
  title: string;
  subtitle: string;
  value: number;
  icon: ReactNode;
  width: number;
  height: number;
  showButton: boolean;
  buttonTitle?: string;
  buttonSize?: "small" | "medium" | "large" | undefined;
};

export const DashboardCard = (props: InfoCardProps) => {
  return (
    <StyledCard sx={{ width: props.width, height: props.height }}>
      <Grid container justifyContent={"space-between"}>
        <Icon sx={{marginBottom: 1}}>{props.icon}</Icon>
        {props.showButton ? (
          <BeetellerButton title={props.buttonTitle} size={props.buttonSize} />
        ) : null}
      </Grid>
      <StyledTypography sx={{ marginBottom: 9}}>
        {props.title}
      </StyledTypography>
      <StyledTypography>{props.subtitle}</StyledTypography>
      <Grid container alignItems={"center"}>
        <StyledTypography>R$</StyledTypography>
        <StyledAccountValue>
          &nbsp;{formatCurrencyBRL(props.value)}
        </StyledAccountValue>
      </Grid>
    </StyledCard>
  );
};

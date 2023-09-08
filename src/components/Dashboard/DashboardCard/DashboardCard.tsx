import { ReactNode, useState } from "react";
import { Grid, Icon } from "@mui/material";

import {
  StyledBox,
  StyledAccountValue,
  StyledButton,
  StyledCard,
  StyledTypography,
} from "./DashboardCard.styles";

import { formatCurrencyBRL } from "../../../utils/currency";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type InfoCardProps = {
  title: string;
  subtitle: string;
  value: number;
  icon: ReactNode;
  width: number;
  height: number;
  showButton?: boolean;
  buttonTitle?: string;
  buttonSize?: "small" | "medium" | "large" | undefined;
};

export const DashboardCard = (props: InfoCardProps) => {
  const [isMouseOnOffersCard, setIsMouseOnOffersCard] = useState(false);

  return (
    <StyledCard
      onMouseEnter={() => setIsMouseOnOffersCard(true)}
      onMouseLeave={() => setIsMouseOnOffersCard(false)}
      className={"card-dashboard"}
      sx={{
        width: props.width,
        height: props.height,
        backgroundColor: "#2f2f2f",
      }}
    >
      <Grid container justifyContent={"space-between"}>
        <Icon sx={{ marginBottom: 1 }}>{props.icon}</Icon>
        {props.showButton ? <StyledButton>Fatura aberta</StyledButton> : null}
      </Grid>

      <StyledTypography sx={{ marginBottom: 9 }}>
        {props.title}
      </StyledTypography>

      <StyledTypography>{props.subtitle}</StyledTypography>

      <StyledBox>
        <Grid container alignItems={"center"}>
          <StyledTypography>R$</StyledTypography>

          <StyledAccountValue>
            &nbsp;{formatCurrencyBRL(props.value)}
          </StyledAccountValue>
        </Grid>
        {isMouseOnOffersCard ? (
          <ArrowForwardIcon
            sx={{
              color: "#EBB932",
              cursor: "pointer",
            }}
          />
        ) : null}
      </StyledBox>
    </StyledCard>
  );
};

import { ReactNode, useState } from "react";
import { Grid, Icon, Skeleton } from "@mui/material";

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
  showButton: boolean;
  buttonTitle?: string;
  buttonSize?: "small" | "medium" | "large" | undefined;
  isloading?: boolean;
};

export const DashboardCard = (props: InfoCardProps) => {
  const [isMouseOnOffersCard, setIsMouseOnOffersCard] = useState(false);
 
  return (
    <StyledCard
      onMouseEnter={() => setIsMouseOnOffersCard(true)}
      onMouseLeave={() => setIsMouseOnOffersCard(false)}
      className={'card-dashboard'}
      sx={{
        width: props.width,
        height: props.height,
        backgroundColor: props.isloading ? "#e0e0e0" : "#2f2f2f",
      }}
    >
      <Grid container justifyContent={"space-between"} sx={{ zIndex: 1 }}>
        <Icon sx={{ marginBottom: 1 }}>{props.icon}</Icon>
        {props.showButton ? (
          props.isloading ? (
            <Skeleton animation="wave" width="20%" />
          ) : (
            <StyledButton>Fatura aberta</StyledButton>
          )
        ) : null}
      </Grid>

      {props.isloading ? (
        <Skeleton
          animation="wave"
          width="25%"
          variant="text"
          sx={{ backgroundColor: "grey.400", marginBottom: 9 }}
        />
      ) : (
        <StyledTypography sx={{ marginBottom: 9 }}>
          {props.title}
        </StyledTypography>
      )}

      {props.isloading ? (
        <Skeleton
          animation="wave"
          width="30%"
          variant="text"
          sx={{ backgroundColor: "grey.400" }}
        />
      ) : (
        <StyledTypography>{props.subtitle}</StyledTypography>
      )}
      <StyledBox>
        <Grid container alignItems={"center"}>
          {props.isloading ? (
            <Skeleton
              animation="wave"
              width="4%"
              variant="text"
              sx={{
                backgroundColor: "grey.400",
                marginRight: 2,
                borderRadius: 2,
              }}
            />
          ) : (
            <StyledTypography>R$</StyledTypography>
          )}
          {props.isloading ? (
            <Skeleton
              animation="wave"
              height={50}
              variant="text"
              width={150}
              sx={{ backgroundColor: "grey.400", borderRadius: 5 }}
            />
          ) : (
            <StyledAccountValue>
              &nbsp;{formatCurrencyBRL(props.value)}
            </StyledAccountValue>
          )}
        </Grid>
          {isMouseOnOffersCard ? <ArrowForwardIcon sx={{ color: "#EBB932", cursor: 'pointer', transition: 'ease .5s' }} /> : null}
      </StyledBox>
    </StyledCard>
  );
};

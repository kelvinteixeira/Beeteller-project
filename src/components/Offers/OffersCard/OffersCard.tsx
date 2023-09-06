import { useState } from "react";
import { CardContent, CardMedia, Grid } from "@mui/material/";
import {
  StyledCardTitle,
  StyledCardSubtitle,
  StyledTypography,
  OffersValue,
  StyledCard,
  StyledButton,
} from "./OffersCard.styles";

import { formatCurrencyBRL } from "../../../utils/currency";

import offersIcon from "../../../assets/offersIcon.svg";
import offersImage from "../../../assets/offersImage.svg";
import arrowForwardSVG from "../../../assets/arrow_forward.svg";

type OffersCardProps = {
  offerType: string;
  title: string;
  subtitle: string;
  amount: number;
};

export const OffersCard = (props: OffersCardProps) => {
  const [isMouseOnOffersCard, setIsMouseOnOffersCard] = useState(false);

  return (
    <Grid>
      <StyledCard
        key={props.offerType}
        onMouseEnter={() => setIsMouseOnOffersCard(true)}
        onMouseLeave={() => setIsMouseOnOffersCard(false)}
      >
        <CardMedia
          className={
            isMouseOnOffersCard ? "image-container zoom-img" : "image-container"
          }
          component="img"
          image={offersImage}
          alt="Foto de uma mulher sorrindo"
        />

        <CardContent>
          <img
            className={isMouseOnOffersCard ? "fade-down" : "fade-down.show"}
            src={offersIcon}
          />

          <StyledCardTitle>{props.title}</StyledCardTitle>

          <StyledCardSubtitle>{props.subtitle}</StyledCardSubtitle>
          <Grid container alignItems={"center"} sx={{ marginBottom: 2 }}>
            <StyledTypography>R$&nbsp;</StyledTypography>
            <OffersValue>{formatCurrencyBRL(props.amount)}</OffersValue>
          </Grid>

          <StyledButton
            className={
              isMouseOnOffersCard ? "fullwidth-button" : "button-container"
            }
            title={"Ver oferta"}
            size={"large"}
            endIcon={<img src={arrowForwardSVG} />}
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Ver Oferta
          </StyledButton>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

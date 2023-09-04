import { useState, useEffect } from "react";
import { BeetellerButton } from "../BeetellerButton/BeetellerButon";
import { CardContent, CardMedia, Grid } from "@mui/material/";
import {
  GridStyled,
  StyledCardTitle,
  StyledTitle,
  StyledCardSubtitle,
  StyledTypography,
  OffersValue,
  StyledCard,
} from "./OffersCard.styles";

import { api } from "../../lib/axios";
import { formatCurrencyBRL } from "../../utils/currency";

import offersIcon from "../../assets/offersIcon.svg";
import offersImage from "../../assets/offersImage.svg";
import arrowForwardSVG from "../../assets/arrow_forward.svg";

type OffersCardItems = {
  offerType: string;
  title: string;
  subtitle: string;
  amout: number;
};

export const OffersCard = () => {
  const [data, setData] = useState<Array<OffersCardItems>>([]);

  useEffect(() => {
    api.get("/offers").then((response) => setData(response.data));
  }, []);
  return (
    <Grid>
      <GridStyled>
        <StyledTitle>Ofertas para você</StyledTitle>
      </GridStyled>
      {data.map((item) => (
        <StyledCard key={item.offerType}>
          <CardMedia
            component="img"
            height="152"
            image={offersImage}
            alt="Foto de uma mulher sorrindo"
          />
          <CardContent>
            <img src={offersIcon} />
            <StyledCardTitle>{item.title}</StyledCardTitle>
            <StyledCardSubtitle>{item.subtitle}</StyledCardSubtitle>
            <Grid container alignItems={"center"} sx={{ marginBottom: 2 }}>
              <StyledTypography>R$&nbsp;</StyledTypography>
              <OffersValue>{formatCurrencyBRL(item.amout)}</OffersValue>
            </Grid>

            <BeetellerButton
              title={"Ver oferta"}
              size={"large"}
              endIcon={<img src={arrowForwardSVG} />}
            />
          </CardContent>
        </StyledCard>
      ))}
    </Grid>
  );
};

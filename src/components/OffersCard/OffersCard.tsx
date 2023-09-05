import { useState, useEffect } from "react";
import { CardContent, CardMedia, Grid, Skeleton } from "@mui/material/";
import {
  GridStyled,
  StyledCardTitle,
  StyledTitle,
  StyledCardSubtitle,
  StyledTypography,
  OffersValue,
  StyledCard,
  StyledButton,
} from "./OffersCard.styles";

import { api } from "../../lib/axios";
import { formatCurrencyBRL } from "../../utils/currency";

import offersIcon from "../../assets/offersIcon.svg";
import offersImage from "../../assets/offersImage.svg";
import arrowForwardSVG from "../../assets/arrow_forward.svg";

type OffersCardItems = {
  offers: {
    offerType: string;
    title: string;
    subtitle: string;
    amount: number;
  }[];
};

export const OffersCard = () => {
  const [isMouseOnOffersCard, setIsMouseOnOffersCard] = useState(false);
  const [data, setData] = useState<OffersCardItems>();

  useEffect(() => {
    api.get("/offers").then((response) => setData(response.data));
  }, []);

  return (
    <Grid>
      <GridStyled>
        <StyledTitle>Ofertas para você</StyledTitle>
      </GridStyled>
      {data?.offers.map((item) => (
        <StyledCard
          key={item.offerType}
          onMouseEnter={() => setIsMouseOnOffersCard(true)}
          onMouseLeave={() => setIsMouseOnOffersCard(false)}
        >
          {!data ? (
            <Skeleton animation="wave" height={152} width={323} />
          ) : (
            <CardMedia
              className={
                isMouseOnOffersCard
                  ? "image-container zoom-img"
                  : "image-container"
              }
              component="img"
              image={offersImage}
              alt="Foto de uma mulher sorrindo"
            />
          )}
          <CardContent>
            <img
              className={isMouseOnOffersCard ? "fade-down" : "fade-down.show"}
              src={offersIcon}
            />
            {!data ? (
              <Grid container alignItems={"center"}>
                <Skeleton
                  animation="wave"
                  width="5%"
                  height={20}
                  sx={{ marginRight: 1 }}
                />
                <Skeleton
                  animation="wave"
                  width="40%"
                  height={40}
                  sx={{ borderRadius: 4 }}
                />
              </Grid>
            ) : (
              <StyledCardTitle>{item.title}</StyledCardTitle>
            )}
            {!data ? (
              <Grid sx={{ marginBottom: 2 }}>
                <Skeleton animation="wave" width="60%" height={20} />
                <Skeleton animation="wave" width="100%" height={20} />
              </Grid>
            ) : (
              <>
                <StyledCardSubtitle>{item.subtitle}</StyledCardSubtitle>
                <Grid container alignItems={"center"} sx={{ marginBottom: 2 }}>
                  <StyledTypography>R$&nbsp;</StyledTypography>
                  <OffersValue>{formatCurrencyBRL(item.amount)}</OffersValue>
                </Grid>
              </>
            )}

            {!data ? (
              <Skeleton animation="wave" width="25%" sx={{ marginLeft: 2 }} />
            ) : (
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
            )}
          </CardContent>
        </StyledCard>
      ))}
    </Grid>
  );
};

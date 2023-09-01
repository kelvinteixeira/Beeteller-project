import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import offersImage from "../../assets/offersImage.svg";
import {
  GridStyled,
  StyledCardTitle,
  StyledTitle,
  StyledCardSubtitle,
  StyledTypography,
  OffersValue,
  StyledCard,
} from "./OffersCard.styles";
import offersIcon from "../../assets/offersIcon.svg";
import { formatCurrencyBRL } from "../../utils/currency";
import { BeetellerButton } from "../BeetellerButton/BeetellerButon";
import arrowForwardSVG from "../../assets/arrow_forward.svg";

export const OffersCard = () => {
  return (
    <Grid>
      <GridStyled>
        <StyledTitle>Ofertas para você</StyledTitle>
      </GridStyled>
      <StyledCard>
        <CardMedia
          component="img"
          height="152"
          image={offersImage}
          alt="Foto de uma mulher sorrindo"
        />
        <CardContent>
          <img src={offersIcon} />
          <StyledCardTitle>Empréstimo Beeteller</StyledCardTitle>
          <StyledCardSubtitle>Valor disponível de até</StyledCardSubtitle>
          <Grid container alignItems={"center"} sx={{marginBottom: 2}}>
            <StyledTypography>R$&nbsp;</StyledTypography>
            <OffersValue>{formatCurrencyBRL(1000000)}</OffersValue>
          </Grid>

          <BeetellerButton
            title={"Ver oferta"}
            size={"large"}
            endIcon={<img src={arrowForwardSVG} />}
          />
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

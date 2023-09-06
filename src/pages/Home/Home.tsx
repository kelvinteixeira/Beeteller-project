import { Box, Container, Grid } from "@mui/material";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { AccountMovimentation } from "../../components/AccountMovimentation/AccountMovimentation";
import { Offers } from "../../components/Offers/Offers";
import {
  StyledTitle,
  GridStyled,
  StyledSubtitle,
} from "./Home.styles"

export const Home = () => {
  return (
    <Container>
      <GridStyled>
        <Grid container alignItems={"center"}>
          <StyledSubtitle>Olá,</StyledSubtitle>
          <StyledTitle>&nbsp;Kelvin</StyledTitle>
        </Grid>
        <StyledSubtitle>Seja bem vindo a sua conta digital</StyledSubtitle>
      </GridStyled>
      <Dashboard />
      <Grid container justifyContent={"space-between"}>
        <Grid
          container
          justifyContent={"space-between"}
          sx={{ marginBottom: 2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StyledTitle>Conta digital</StyledTitle>
            <StyledSubtitle>&nbsp; Últimas movimentações</StyledSubtitle>
          </Box>
          <StyledTitle sx={{ marginRight: 13 }}>Ofertas para você</StyledTitle>
        </Grid>
      </Grid>
      <Grid container justifyContent={"space-between"}>
        <Box>
          <AccountMovimentation />
        </Box>
        <Offers />
      </Grid>
    </Container>
  );
};

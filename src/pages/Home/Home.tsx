import { Container, Grid } from "@mui/material";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { AccountMovimentation } from "../../components/AccountMovimentation/AccountMovimentation";
import { OffersCard } from "../../components/OffersCard/OffersCard";

export const Home = () => {
  return (
    <Container>
      <Dashboard />
      <Grid container justifyContent={"space-between"}>
        <AccountMovimentation />
        <OffersCard isLoading />
      </Grid>
    </Container>
  );
};

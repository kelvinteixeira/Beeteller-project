
import { Container } from "@mui/material";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { AccountMovimentation } from "../../components/AccountMovimentation/AccountMovimentation";

export const Home = () => {
  return (
    <Container>
      <Dashboard />
      <AccountMovimentation />
    </Container>
  );
};

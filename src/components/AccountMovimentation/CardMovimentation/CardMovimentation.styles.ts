import { Box, Card, Grid, Typography, styled } from "@mui/material";

export const GridStyled = styled(Grid)`
  padding: 1rem 0 1rem 0;
  line-height: 1rem;
`;

export const StyledTitle = styled(Typography)`
  font-weight: 600;
  font-size: 1.5rem;
`;
export const StyledSubtitle = styled(Typography)`
  font-weight: 600;
  font-size: 1.5rem;
`;

export const StyledCardMovimentation = styled(Card)`
  @media (max-width: 850px) {
    width: 44rem;
  }

  @media (max-width: 740px) {
    width: 35rem;
    grid-template-columns: 1fr 1fr auto;
  }
  @media (max-width: 575px) {
    width: 25rem;
  }
  width: 51rem;
  height: 5rem;
  background-color: #e0e0e0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  text-align: left;
  place-items: left;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr auto;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const StyledCardTitle = styled(Typography)`
@media (max-width: 600px) {
   display: none;
}
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;
export const StyledCardValue = styled(Typography)`
  font-weight: 600;
  font-size: 0.9rem;
`;

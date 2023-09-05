import { Box, Button, Card, Grid, Typography, styled } from "@mui/material";

export const GridStyled = styled(Grid)`
  padding: 1rem 0 1rem 0;
  line-height: 1rem;
`;

export const StyledTitle = styled(Typography)`
  font-weight: 600;
  font-size: 1.5rem;
`;

export const StyledCard = styled(Card)`
  width: 20rem;
  height: 23rem;
  background-color: #E0E0E0;
  border-radius: .5rem;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const StyledCardTitle = styled(Typography)`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: .5rem;
`;

export const StyledCardSubtitle = styled(Typography)`
  font-weight: 600;
  font-size: .8rem;
  color: #666666;
`;

export const StyledTypography = styled(Typography)`
  font-weight: 600;
  font-size: .9rem;
  color: #000000;
`;

export const OffersValue = styled(Typography)`
  font-weight: 600;
  font-size: 1.5rem;
  color: #000000;
`;
export const StyledButton = styled(Button)`
  text-transform: none;
  background-color: #f1cd6d;
  color: #000000;
  font-weight: 600;
  border-radius: 0.5rem;
  font-size: .7rem;
  text-align: left;

  &:hover {
    background-color: #ebb932 !important;
  }
`;
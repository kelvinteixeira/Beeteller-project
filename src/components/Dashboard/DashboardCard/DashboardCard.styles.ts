import { Box, Button, Card, Typography, styled } from "@mui/material";

export const StyledCard = styled(Card)`
  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
  @media (min-width: 601px) {
    margin-bottom: 1rem;
  }
  border-radius: 1rem;
  padding: 1.5rem;
`;

export const StyledTypography = styled(Typography)`
  font-weight: 600;
  font-size: 0.9rem;
  color: #fbfbfb;
`;
export const StyledAccountValue = styled(Typography)`
  font-weight: 600;
  font-size: 2rem;
  color: #fbfbfb;
`;

export const StyledButton = styled(Button)`
  text-transform: none;
  background-color: #f1cd6d;
  color: #000000;
  font-weight: 600;
  border-radius: 0.5rem;
  font-size: 0.7rem;

  &:hover {
    background-color: #ebb932 !important;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

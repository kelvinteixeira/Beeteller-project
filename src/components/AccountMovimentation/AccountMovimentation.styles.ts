import { Box, Grid, Typography, styled } from "@mui/material";

export const GridStyled = styled(Grid)`
  padding: 1rem 0 1rem 0;
  line-height: 1rem;
`;

export const StyledTitle = styled(Typography)`
  font-weight: 600;
  font-size: 1.5rem;
`;
export const StyledSubtitle = styled(Typography)`
  color: #666666;
  font-weight: 600;
  font-size: .9rem;
`;

export const CardMovimentation = styled(Grid)`
  width: 51rem;
  height: 5rem;
  background-color: #E0E0E0;
  border-radius: .5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  grid-column: 2fr 2fr auto;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const StyledCardTitle = styled(Typography)`
  font-weight: 600;
  font-size: .9rem;  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const StyledCardValue = styled(Typography)`
  font-weight: 600;
  font-size: .9rem;

`;
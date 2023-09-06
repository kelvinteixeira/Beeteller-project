import { Skeleton } from "@mui/material";
import { StyledCardMovimentation, StyledBox } from "../CardMovimentation/CardMovimentation.styles";

export const CardMovimentationSkelleton = () => {
  return (
    <StyledCardMovimentation>
      <StyledBox>
        <Skeleton animation="wave" variant="text" width={15} />
        <Skeleton
          animation="wave"
          variant="text"
          width={80}
          sx={{ marginLeft: 1 }}
        />
      </StyledBox>
      <Skeleton animation="wave" variant="text" width={200} />
      <Skeleton animation="wave" variant="text" width={100} />
    </StyledCardMovimentation>
  );
};

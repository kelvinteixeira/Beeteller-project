import { Skeleton } from "@mui/material";
import {
  StyledCardMovimentation,
  StyledBox,
} from "../CardMovimentation/CardMovimentation.styles";
import { useMediaQuery } from "@mui/material";

export const CardMovimentationSkelleton = () => {
  const isMobile = useMediaQuery("(min-width: 575px)");

  return (
    <StyledCardMovimentation>
      <StyledBox>
        <Skeleton animation="wave" variant="text" width={15} />
        {isMobile ? (
          <Skeleton
            animation="wave"
            variant="text"
            width={80}
            sx={{ marginLeft: 1 }}
          />
        ) : null}
      </StyledBox>
      {isMobile ? (
        <>
          <Skeleton animation="wave" variant="text" width={200} />
          <Skeleton animation="wave" variant="text" width={100} />
        </>
      ) : (
        <>
          <Skeleton animation="wave" variant="text" width={100} />
          <Skeleton animation="wave" variant="text" width={80} />
        </>
      )}
    </StyledCardMovimentation>
  );
};

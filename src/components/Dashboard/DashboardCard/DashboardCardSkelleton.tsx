import { Grid, Skeleton } from "@mui/material";
import { StyledCard, StyledBox } from "./DashboardCard.styles";

export const DashboardCardSkelleton = () => {
  return (
    <Grid container justifyContent={"space-between"}>
      <StyledCard
        sx={{
          width: 448,
          height: 244,
          backgroundColor: "#e0e0e0",
        }}
      >
        <Grid container justifyContent={"space-between"}>
          <Skeleton animation="wave" width={15} />
        </Grid>
        <Skeleton animation="wave" width="25%" sx={{ marginBottom: 9 }} />
        <Skeleton animation="wave" width="30%" />
        <StyledBox>
          <Grid container alignItems={"center"}>
            <Skeleton
              animation="wave"
              width="4%"
              sx={{
                marginRight: 2,
                borderRadius: 2,
              }}
            />
            <Skeleton
              animation="wave"
              height={50}
              width={150}
              sx={{ borderRadius: 5 }}
            />
          </Grid>
        </StyledBox>
      </StyledCard>
      <StyledCard
        sx={{
          width: 344,
          height: 244,
          backgroundColor: "#e0e0e0",
        }}
      >
        <Grid container justifyContent={"space-between"}>
          <Skeleton animation="wave" width={15} />
        </Grid>
        <Skeleton animation="wave" width="35%" sx={{ marginBottom: 9 }} />
        <Skeleton animation="wave" width="40%" />
        <StyledBox>
          <Grid container alignItems={"center"}>
            <Skeleton
              animation="wave"
              width="5%"
              sx={{
                marginRight: 2,
                borderRadius: 2,
              }}
            />
            <Skeleton
              animation="wave"
              height={50}
              width={150}
              sx={{ borderRadius: 5 }}
            />
          </Grid>
        </StyledBox>
      </StyledCard>
      <StyledCard
        sx={{
          width: 320,
          height: 244,
          backgroundColor: "#e0e0e0",
        }}
      >
        <Grid container justifyContent={"space-between"}>
          <Skeleton animation="wave" width={15} />
          <Skeleton animation="wave" width="30%" />
        </Grid>
        <Skeleton animation="wave" width="35%" sx={{ marginBottom: 9 }} />
        <Skeleton animation="wave" width="40%" />
        <StyledBox>
          <Grid container alignItems={"center"}>
            <Skeleton
              animation="wave"
              width="5%"
              sx={{
                marginRight: 2,
                borderRadius: 2,
              }}
            />
            <Skeleton
              animation="wave"
              height={50}
              width={150}
              sx={{ borderRadius: 5 }}
            />
          </Grid>
        </StyledBox>
      </StyledCard>
    </Grid>
  );
};

import { Skeleton, CardContent, Grid } from "@mui/material"
import { StyledCard } from "../Offers.styles"

export const OffersCardSkelleton = () => {
  return (
    <StyledCard>
          <Skeleton animation="wave" width={323} height={152} />
          <CardContent>
            <Skeleton animation="wave" width={15} />
            <Grid container alignItems={"center"}>
              <Skeleton
                animation="wave"
                width="5%"
                height={20}
                sx={{ marginRight: 1 }}
              />
              <Skeleton
                animation="wave"
                width="40%"
                height={40}
                sx={{ borderRadius: 4 }}
              />
            </Grid>
            <Grid sx={{ marginBottom: 2 }}>
              <Skeleton animation="wave" width="60%" height={20} />
              <Skeleton animation="wave" width="85%" height={20} />
            </Grid>
            <Skeleton animation="wave" width="25%" sx={{ marginLeft: 2 }} />
          </CardContent>
        </StyledCard>
  )
}
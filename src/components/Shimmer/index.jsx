import { Box, Skeleton } from "@mui/material";
import React from "react";

export const ProductpageShimmer =()=>{
    return(
        <>
        <Box sx={{ gap: 2 }}>
        <Skeleton variant="rectangular" width={"100%"} height={"10vh"} />
        <Skeleton variant="rectangular" width={"100%"} height={"10vh"} marginTop={"-2"} />
        </Box>
        
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              {[1, 2, 3, 4].map((e, i) => {
                return (
                  <Box sx={{ height: "300px" }}>
                    <Skeleton height={"260px"} width={"250px"} />
                    <Skeleton
                      width={"100px"}
                      height={"32px"}
                      sx={{ marginTop: "-30px" }}
                    />
                    <Skeleton width={"100px"} height={"32px"} />
                  </Box>
                );
              })}
              </Box>
              <Box sx={{ gap: 2 }}>
        <Skeleton variant="rectangular" width={"100%"} height={"20vh"} />
        </Box>
        </>
    )
};
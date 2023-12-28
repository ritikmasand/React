import { Card, Skeleton, Stack, CardContent } from "@mui/material";
import React from "react";

function SIngleSearchCardSkeleton() {
  return (
    <Card sx={{ display: "flex" }}>
      <Skeleton
        variant="rectangular"
        width={260}
        height={342}
        animation={"wave"}
      />
      <CardContent>
        {/* <Stack spacing={1} alignItems="flex-start" justifyContent="flex-start">
          <Skeleton
            variant="rectangular"
            width={260}
            height={180}
            animation={"wave"}
          />
          <Skeleton
            variant="rectangular"
            width={130}
            height={180}
            animation={"wave"}
          />
        </Stack> */}
      </CardContent>
    </Card>
  );
}

export default SIngleSearchCardSkeleton;

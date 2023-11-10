import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
      }}
      gap={2}
      columnGap={2}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, index) => (
          <VStack key={index}>
            <Skeleton w={"full"} alignItems={"flex-start"} gap={4}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <ProfilePost img="/public/img1.png" />
          <ProfilePost img="/public/img2.png" />
          <ProfilePost img="/public/img3.png" />
          <ProfilePost img="/public/img4.png" />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;

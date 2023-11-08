import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import SuggestedHeader from "./Suggestedheader";
import SuggestedUser from "./SuggestedUser";
import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

const SuggestedUsers = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading && (
        <VStack gap={4} alignItems={"flex-start"} my={10}>
          <Skeleton size={10} height={"20px"} w={"full"} />
          <Flex w={"full"}>
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height={"30px"} width={"200px"} />
              <Skeleton height={"30px"} width={"200px"} />
              <Skeleton height={"30px"} width={"200px"} />
            </VStack>
          </Flex>
        </VStack>
      )}
      {!isLoading && (
        <>
          <VStack py={6} gap={4}>
            <SuggestedHeader />
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              w={"full"}
            >
              <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
              </Text>
              <Text
                fontSize={12}
                fontWeight={"bold"}
                _hover={"gray.400"}
                cursor={"pointer"}
              >
                See All
              </Text>
            </Flex>
            <SuggestedUser
              name="umer_thathroo"
              followers={722}
              avatar="https://bit.ly/dan-abramov"
            />
            <SuggestedUser
              name="sy_areeb"
              followers={587}
              avatar="https://bit.ly/ryan-florence"
            />
            <SuggestedUser
              name="habibi_27"
              followers={17}
              avatar="https://bit.ly/code-beast"
            />

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
              Built by{" "}
              <Link
                as={RouterLink}
                to={"https://github.com/usmanrangrez"}
                target="_blank"
                color="blue.500"
              >
                UsmaanRangrez
              </Link>
            </Box>
          </VStack>
        </>
      )}
    </>
  );
};

export default SuggestedUsers;

import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} al="user profile pic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          <Box>{username}</Box>
          <Box>-</Box>
          <Box>1w</Box>
        </Flex>
      </Flex>
      <Box
        cursor={"pointer"}
        fontSize={12}
        color={"blue.500"}
        fontWeight={"bold"}
        _hover={{
          color: "white",
        }}
        transition={"0.2s ease-in-out"}
      >
        <Text>Unfollow</Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;

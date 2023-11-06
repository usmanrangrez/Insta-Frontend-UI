import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm.jsx/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left Hand Side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/public/auth.png" h={650} alt="Phone Img" />
          </Box>

          {/* Right Hand Side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get The app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/public/playstore.png" h={10} alt="PlayStore Logo" />
              <Image src="/public/microsoft.png" h={10} alt="Microsoft Logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;

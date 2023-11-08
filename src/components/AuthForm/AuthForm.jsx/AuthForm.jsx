import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (isLogin && (!inputs.email || !inputs.password)) {
      alert("Please fill all the fields");
      return;
    }

    if (
      !isLogin &&
      (!inputs.email || !inputs.password || !inputs.confirmPassword)
    ) {
      alert("Please fill all the fields");

      return;
    }

    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/public/logo.png"
            h={24}
            cursor={"pointer"}
            alt="instagram"
          />
          0
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            fontSize={"14px"}
            value={inputs.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            fontSize={"14px"}
            value={inputs.password}
            onChange={handleChange}
          />
          {!isLogin ? (
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              fontSize={"14px"}
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
          ) : null}
          <Button
            w={"full"}
            colorScheme="blue"
            fontSize={"14px"}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>
          {/* -----OR---- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={2}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text color={"white"}>OR</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Image src="/public/google.png" w={5} h={5} alt="Google Logo" />
            <Text color={"blue.500"} mx={2}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14} cursor={"pointer"}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            mx={2}
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
          >
            {isLogin ? "Sign Up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;

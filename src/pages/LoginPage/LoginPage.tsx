import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Login from "./components/Login/Login";

const LoginPage: React.FC = () => {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Login
      </Heading>
      <Login />
    </Box>
  );
};

export default LoginPage;

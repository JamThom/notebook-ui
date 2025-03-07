import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Login from "./components/Login/Login";

const LoginRoute: React.FC = () => {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Login
      </Heading>
      <Login />
    </Box>
  );
};

export default LoginRoute;

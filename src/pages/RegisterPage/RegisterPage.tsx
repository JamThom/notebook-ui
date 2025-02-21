
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Register from "./components/Register/Register";

const RegisterPage: React.FC = () => {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Register
      </Heading>
      <Register />
    </Box>
  );
};

export default RegisterPage;

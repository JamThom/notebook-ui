import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import login from "../../../../api/login";
import { Link, useNavigate } from "react-router";
import routes from "../../../../config/routes";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      console.log({ response });
      if (response) {
        navigate(routes.books);
      }
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="md" mt={4}>
            Login
          </Button>
          <Link style={{ width: '100%' }} to={routes.register}>
            <Button flex="1" width="100%" type="button" colorScheme="gray" mr={3}>
              Register
            </Button>
          </Link>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;

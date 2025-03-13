import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import submitRegistration from "../../../../api/register";
import routes from "../../../../config/routes";
import { Link } from "react-router";

type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
};

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterForm>();

  const handleSubmitRegistration = (data: RegisterForm) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    submitRegistration({
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      userName: data.userName,
    });
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <form onSubmit={handleSubmit(handleSubmitRegistration)}>
        <Stack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" {...register("userName")} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" {...register("email")} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" {...register("password")} />
          </FormControl>
          <FormControl id="confirm-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" {...register("confirmPassword")} />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="md" mt={4}>
            Register
          </Button>
          <Link style={{ width: '100%' }} to={routes.login}>
            <Button flex="1" width="100%" type="button" colorScheme="gray" mr={3}>
              Login
            </Button>
          </Link>
        </Stack>
      </form>
    </Box>
  );
};

export default Register;

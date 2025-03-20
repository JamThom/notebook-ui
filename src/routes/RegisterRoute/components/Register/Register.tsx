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
import submitRegistration from "@/api/register";
import routes from "@/config/routes";
import { Link } from "react-router";
import UiButton from "@/ui/Button/Button";

type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
};

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterForm>();

  const [pending, setPending] = React.useState(false);

  const handleSubmitRegistration = async (data: RegisterForm) => {
    setPending(true);
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    await submitRegistration({
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      userName: data.userName,
    });
    setPending(false);
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
          <UiButton
            isPending={pending}
            variant="primary"
            type="submit"
            width="100%"
            icon="user-plus">
            Register
          </UiButton>
          <Link style={{ width: '100%' }} to={routes.login}>
            <UiButton
              width="100%"
              type="button"
              variant="secondary"
              icon="sign-in">
              Login
            </UiButton>
          </Link>
        </Stack>
      </form>
    </Box>
  );
};

export default Register;

import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <VStack spacing={4}>
      <Heading>Welcome to the Bookstore</Heading>
      <Flex gap={2}>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </Flex>
    </VStack>
  );
};

export default HomePage;

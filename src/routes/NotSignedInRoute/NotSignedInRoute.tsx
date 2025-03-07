import routes from "../../config/routes";
import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router";

const NotSignedInRoute = () => {
  return (
    <VStack spacing={4}>
      <Heading>Welcome to the Bookstore</Heading>
      <Flex gap={2}>
        <Link to={routes.login}>
          <Button>Login</Button>
        </Link>
        <Link to={routes.register}>
          <Button>Register</Button>
        </Link>
      </Flex>
    </VStack>
  );
};

export default NotSignedInRoute;

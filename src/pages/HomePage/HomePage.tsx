import { Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <VStack>
        <Flex>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </Flex>
    </VStack>
  );
};

export default HomePage;
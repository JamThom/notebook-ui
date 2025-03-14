import React from "react";
import { Box, Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import BookList from "./components/BookList/BookList";
import CreateNotebook from "./components/CreateNotebook/CreateNotebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAccount } from "../../api/queries/account";

const BooksRoute: React.FC = () => {

    const account = useGetAccount();
  return (
    <Box p={4}>
      <Flex>
        <Heading as="h1" size="lg" mb={4}>
          Notebooks
        </Heading>

        <Menu>
          <MenuButton as={Button} rightIcon={<FontAwesomeIcon icon="caret-down" />}>
            {account.data?.userName}
          </MenuButton>
          <MenuList>
            <MenuItem>Log out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <BookList />
    </Box>
  );
};

export default BooksRoute;

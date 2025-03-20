import React from "react";
import { Box, Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import BookList from "./components/BookList/BookList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAccount } from "@/api/queries/account";

const BooksRoute: React.FC = () => {

    const account = useGetAccount();
  return (
    <Box p={4}>
      <Flex justifyContent={"space-between"} mb={4}>
        <Heading as="h1" size="lg" mb={0}>
          Notebooks
        </Heading>

        <Menu>
          <MenuButton as={Button} rightIcon={<FontAwesomeIcon icon="caret-down" />}>
            <FontAwesomeIcon size="sm" icon="user" /> {account?.userName}
          </MenuButton>
          <MenuList>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Log out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <BookList />
    </Box>
  );
};

export default BooksRoute;

import React from "react";
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAccount } from "@/api";
import { logOut } from "@/api";

const AccountMenu: React.FC = () => {
  const account = useGetAccount();

  if (!account) return null;

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <Flex position="fixed" display={["none", "unset"]} right={4} top={4} zIndex={2}>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<FontAwesomeIcon icon="caret-down" />}
        >
          <FontAwesomeIcon size="sm" icon="user" /> {account?.userName}
        </MenuButton>
        <MenuList>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default AccountMenu;

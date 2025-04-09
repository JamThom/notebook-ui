import React from "react";
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useModalManager from "@/ui-hooks/useModalManager/useModalManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAccount } from "@/api";
import { logOut } from "@/api";
import AccountSettings from "../AccountSettings/AccountSettings";

const AccountMenu: React.FC = () => {
  const account = useGetAccount();

  
  const handleLogOut = async () => {
    await logOut();
  };
  
  const { openModal } = useModalManager();
  
  const handleOpenSettingsModal = () => {
    openModal({
      title: "Settings",
      content: <AccountSettings />,
    });
  };
  
  if (!account) return null;

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
          <MenuItem onClick={handleOpenSettingsModal}>Settings</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default AccountMenu;

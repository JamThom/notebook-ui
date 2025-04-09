import { Box, Flex } from "@chakra-ui/react";
import styles from "./HeaderWrap.styles";

type HeaderWrapProps = {
    children: React.ReactNode;
};

const HeaderWrap = ({
    children
}: HeaderWrapProps) => {

  return (
    <Flex sx={styles.container}>
      <Box sx={styles.box} />
      <Flex sx={styles.innerContainer} gap="2">
        {children}
      </Flex>
    </Flex>
  );
};

export default HeaderWrap;

import { Box } from "@chakra-ui/react";
import styles from "./bookwrapper.styles";

type BookWrapperProps = {
  children: React.ReactNode;
};

const BookWrapper = ({ children }: BookWrapperProps) => {
  return (
    <Box sx={styles.outerBox}>
      <Box sx={styles.innerBox}>
        {children}
      </Box>
    </Box>
  );
};

export default BookWrapper;

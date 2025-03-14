import { Box } from "@chakra-ui/react";

type BookWrapperProps = {
  children: React.ReactNode;
};

const BookWrapper = ({ children }: BookWrapperProps) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        padding: "30px",
        backgroundColor: "grey.400",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          maxWidth: "900px",
          width: "80vw",
          paddingTop: "50px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BookWrapper;

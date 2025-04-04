import { Box } from "@chakra-ui/react";

type BookWrapperProps = {
  children: React.ReactNode;
};

const BookWrapper = ({ children }: BookWrapperProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ["0", "40px"],
        padding: ["0", "30px"],
        backgroundColor: "grey.400",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ["0", "20px"],
          maxWidth: "900px",
          width: ["100vw", "80vw"],
          paddingTop: ["0", "50px"],
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BookWrapper;

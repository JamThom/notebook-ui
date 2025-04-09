import { SystemStyleObject } from "@chakra-ui/react";

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    position: ["static", "absolute"],
    height: "100%",
    padding: ["0", "0 20px"],
    alignItems: "center",
    display: "flex",
    right: "100%",
    zIndex: "2",
    sx: {
      "&:hover svg": {
        transform: "translateX(-.1rem)",
      },
      "& svg": {
        transition: "transform 0.2s ease-in-out",
      },
    },
  },
};

export default styles;

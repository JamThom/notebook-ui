import { SystemStyleObject } from "@chakra-ui/react";

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    role: "group",
    flexDirection: "column",
    transition: "0.3s",
    _active: {
      transform: "scale(0.9)",
    },
  },
  bookCover: {
    borderRadius: "3px",
    transition: "0.3s",
    padding: "1px 2px 3px",
    margin: "0 auto 20px",
    perspective: "1000px",
    _groupHover: {
      transform: "scale(1.01)",
      boxShadow: "0 10px 20px #00000021",
    },
  },
  page: {
    transition: "0.3s",
    gap: "0",
  },
  pageContent: {
    height: "83px",
    overflow: "hidden",
    _a: {
      color: "blue",
    },
  },
  renamingInput: {
    type: "text",
  },
};

export default styles;

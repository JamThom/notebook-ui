import { SystemStyleObject } from "@chakra-ui/react";

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    width: "100%",
    height: "calc(100vh - 110px)",
    border: 0,
    borderRadius: "0",
    backgroundColor: "white",
    boxShadow: "rgb(0 0 0 / 6%) 0px 8px 25px 6px",
    overflowY: "auto",
    minHeight: "200px",
    padding: "10px",
    h1: {
      fontSize: "2xl",
      fontWeight: "bold",
      display: "inline-block",
    },
    ul: {
      paddingLeft: "1em",
    },
    a: {
      color: "blue.500",
      textDecoration: "underline",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  focus: {
    outline: "none",
  },
};

export default styles;
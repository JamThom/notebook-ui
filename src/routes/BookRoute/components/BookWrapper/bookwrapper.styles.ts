import { SystemStyleObject } from "@chakra-ui/react";

const styles: { [key: string]: SystemStyleObject } = {
  outerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ["0", "40px"],
    padding: ["0", "30px"],
    backgroundColor: "grey.400",
  },
  innerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ["0", "20px"],
    maxWidth: "900px",
    width: ["100vw", "80vw"],
    paddingTop: ["0", "50px"],
  },
};

export default styles;

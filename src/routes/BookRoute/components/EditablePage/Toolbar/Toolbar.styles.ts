import { SystemStyleObject } from "@chakra-ui/react";

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    position: "fixed",
    zIndex: 1000,
    padding: "10px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    transform: "translate(-50%, -100%)",
    marginTop: "-10px",
    boxShadow: "0 0 10px #00000021",
  },
  before: {
    content: '""',
    position: "absolute",
    top: "100%",
    left: "50%",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderTop: "10px solid white",
    transform: "translate(-50%, 0)",
    zIndex: 1,
  },
  after: {
    content: '""',
    position: "absolute",
    top: "100%",
    left: "50%",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderTop: "10px solid #ccc",
    transform: "translate(-50%, 1px)",
  },
};

export default styles;

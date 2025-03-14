import { Box, Flex } from "@chakra-ui/react";

type HeaderWrapProps = {
    children: React.ReactNode;
};

const HeaderWrap = ({
    children
}: HeaderWrapProps) => {

  return (
    <Flex
      style={{
        width: "100vw",
        position: "fixed",
        zIndex: 1,
        top: "0",
        left: "0",
        right: "0",
        padding: "20px",
        justifyContent: "center",
        background: "#f8fafc",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          height: "100px",
          background: "#ff000000",
          position: "absolute",
          top: "100%",
          width: "80vw",
          maxWidth: "900px",
          boxShadow: "rgba(0, 0, 0, 0.06) 0px -5px 25px 6px",
        }}
      />
      <Flex
        style={{
          maxWidth: "900px",
          width: "80vw",
          justifyContent: "space-between",
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default HeaderWrap;

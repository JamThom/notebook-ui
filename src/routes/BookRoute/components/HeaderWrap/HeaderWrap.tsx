import { Box, Flex } from "@chakra-ui/react";

type HeaderWrapProps = {
    children: React.ReactNode;
};

const HeaderWrap = ({
    children
}: HeaderWrapProps) => {

  return (
    <Flex
      sx={{
        width: "100vw",
        position: ["static", "fixed"],
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
        sx={{
          height: "100px",
          background: "#ff000000",
          position: "absolute",
          display: ["none", "block"],
          top: "100%",
          width: "80vw",
          maxWidth: "900px",
          boxShadow: "rgba(0, 0, 0, 0.06) 0px -5px 25px 6px",
        }}
      />
      <Flex
        sx={{
          maxWidth: "900px",
          width: ["100vw", "80vw"],
          position: "relative",
          justifyContent: "space-between",
          flexWrap: ["wrap", "nowrap"],
        }}
        gap="2"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default HeaderWrap;

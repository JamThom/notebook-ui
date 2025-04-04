import routes from "@/config/routes";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { Box } from "@chakra-ui/react";
import UiIcon from "@/ui/Icon/Icon";

const Back = () => {
  return (
    <Link to={routes.books}>
      <Box
        position={["static", "absolute"]}
        height="100%"
        padding={["0", "0 20px"]}
        alignItems="center"
        display="flex"
        right="100%"
        zIndex="2"
        sx={{
          "&:hover svg": {
            transform: "translateX(-.1rem)",
          },
          "& svg": {
            transition: "transform 0.2s ease-in-out",
          },
        }}
      >
        <UiIcon icon={faArrowLeft} size="2xl" />
      </Box>
    </Link>
  );
};

export default Back;

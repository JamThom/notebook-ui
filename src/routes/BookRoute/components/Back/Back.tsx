import routes from "@/config/routes";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { Box } from "@chakra-ui/react";
import UiIcon from "@/ui/Icon/Icon";

const Back = () => {
  return (
    <Box
      position="absolute"
      height="100%"
      padding="0 20px"
      alignItems="center"
      display="flex"
      right="100%"
      zIndex="2"
      paddingRight="28px"
    >
      <Link to={routes.books}>
        <UiIcon icon={faArrowLeft} size="2xl" />
      </Link>
    </Box>
  );
};

export default Back;

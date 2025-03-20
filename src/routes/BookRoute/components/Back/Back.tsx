import routes from "../../../../config/routes";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { Box } from "@chakra-ui/react";
import UiIcon from "../../../../ui/Icon/Icon";

const Back = () => {
  return (
    <Box position="fixed" zIndex="2" padding="20px" paddingRight="28px">
      <Link to={routes.books}>
        <UiIcon icon={faArrowLeft} size="2xl" />
      </Link>
    </Box>
  );
};

export default Back;

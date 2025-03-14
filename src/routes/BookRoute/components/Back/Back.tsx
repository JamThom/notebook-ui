import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "../../../../config/routes";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { Box } from "@chakra-ui/react";

const Back = () => {
  return (
    <Box position="fixed" zIndex="2" padding="20px">
      <Link to={routes.books}>
        <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{ marginRight: "8px" }} />
      </Link>
    </Box>
  );
};

export default Back;

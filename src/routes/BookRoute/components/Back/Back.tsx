import routes from "@/config/routes";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { Box } from "@chakra-ui/react";
import UiIcon from "@/ui/Icon/Icon";
import styles from "./Back.styles";

const Back = () => {
  return (
    <Link to={routes.books}>
      <Box sx={styles.container}>
        <UiIcon icon={faArrowLeft} size="2xl" />
      </Box>
    </Link>
  );
};

export default Back;

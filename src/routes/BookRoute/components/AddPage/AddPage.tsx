import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { BookParams } from "../../../../types/route-params";
import { useCreatePage } from "../../../../api/queries/pages";

const AddPage = () => {
  const { bookId } = useParams<BookParams>();

  const createPage = useCreatePage();

  const addPage = () => {
    createPage({
      content: "",
      bookId: bookId as string,
    });
  };

  return (
    <Button onClick={addPage} variant="solid">
      Add Page
    </Button>
  );
};

export default AddPage;

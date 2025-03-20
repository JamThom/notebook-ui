import { useParams } from "react-router-dom";
import { BookParams } from "@/types/route-params";
import { useCreatePage } from "@/api/queries/pages";
import UiCreateButton from "@/ui/CreateButton/CreateButton";

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
    <UiCreateButton onClick={addPage}>
      Add Page
    </UiCreateButton>
  );
};

export default AddPage;

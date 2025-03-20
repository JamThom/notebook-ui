import { useDeleteCurrentBook } from "@/api";
import routes from "@/config/routes";
import UiRemoveButton from "@/ui/RemoveButton/RemoveButton";
import { useNavigate } from "react-router";

const DeleteBook = () => {

  const deleteBook = useDeleteCurrentBook();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteBook();
    navigate(routes.books);
  };

  return (
    <UiRemoveButton onRemove={handleDelete}>
      Delete book
    </UiRemoveButton>
  );
};

export default DeleteBook;

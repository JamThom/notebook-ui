import {
  Button
} from "@chakra-ui/react";
import CreateNotebookForm from "./CreateNotebookForm/CreateNotebookForm";
import useModalManager from "@/ui-hooks/useModalManager/useModalManager";
import UiIcon from "@/ui/Icon/Icon";

const CreateNotebook = () => {

  const { openModal } = useModalManager();

  const openCreateNotebookModal = () => {
    openModal({
      title: "Create Notebook",
      content: <CreateNotebookForm />,
    });
  }

  return (
    <>
      <Button
        height="100%"
        minHeight="160px"
        border="2px dashed #b3b7ba"
        colorScheme="gray"
        size="sm"
        gap="2"
        onClick={openCreateNotebookModal}
      >
         Create Notebook <UiIcon icon="plus" />
      </Button>
    </>
  );
};

export default CreateNotebook;

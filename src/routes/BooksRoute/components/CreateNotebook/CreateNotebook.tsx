import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import CreateNotebookForm from "./CreateNotebookForm/CreateNotebookForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateNotebook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        height="100%"
        minHeight="160px"
        border="2px dashed #b3b7ba"
        colorScheme="gray"
        size="sm"
        onClick={onOpen}
      >
        <FontAwesomeIcon icon="plus" /> Create Notebook
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Notebook</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateNotebookForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateNotebook;

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

const CreateNotebook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="blue" size="sm" onClick={onOpen}>
        Create Notebook
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
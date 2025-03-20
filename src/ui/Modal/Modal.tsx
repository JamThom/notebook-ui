import useModalManager from "@/ui-hooks/useModalManager/useModalManager";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export type UiModalProps = {
  children: React.ReactNode;
  title: string;
  footer?: React.ReactNode;
  onClose?: () => void;
};

const UiModal = ({ children, title, footer, onClose }: UiModalProps) => {

  const { closeModal } = useModalManager();

  const handleClose = () => {
    onClose?.();
    closeModal();
  };

  return (
    <Modal isOpen onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter gap="2">{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UiModal;

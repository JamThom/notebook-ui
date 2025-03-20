import UiModal, { UiModalProps } from "@/ui/Modal/Modal";
import { createContext, useContext, useState } from "react";

type OpenModalArgs = Omit<UiModalProps, 'children'> & { content: React.ReactNode };
 
type ModalContextType = {
  openModal: (modal: OpenModalArgs) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeModal, setActiveModal] = useState<UiModalProps | null>(null);

  const openModal = (modal: OpenModalArgs) => {
    setActiveModal({
        ...modal,
        children: modal.content,
    });
    return () => {
      setActiveModal(null);
    };
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {activeModal && (
        <UiModal {...activeModal} />
      )}
      {children}
    </ModalContext.Provider>
  );
};

const useModalManager = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  return { openModal, closeModal };
};

export default useModalManager;

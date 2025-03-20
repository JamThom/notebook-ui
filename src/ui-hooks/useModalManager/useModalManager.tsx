import UiModal, { UiModalProps } from "@/ui/Modal/Modal";
import { createContext, useContext, useState } from "react";

type OpenModalArgs = Omit<UiModalProps, "children"> & {
  content: React.ReactNode;
};

type ModalContextType = {
  openModal: (modal: OpenModalArgs) => void;
  closeModal: () => void;
  activeModal: UiModalProps | null;
};

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  activeModal: null,
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
    <ModalContext.Provider value={{ openModal, closeModal, activeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const ModalOutput = () => {
  const { activeModal } = useContext(ModalContext);
  return activeModal && <UiModal {...activeModal} />;
};

const useModalManager = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  return { openModal, closeModal };
};

export default useModalManager;

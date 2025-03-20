import useModalManager from "../useModalManager/useModalManager";
import UiCancelButton from "@/ui/CancelButton/CancelButton";
import UiConfirmButton from "@/ui/ConfirmButton/ConfirmButton";

const useConfirm = () => {
  const { openModal, closeModal } = useModalManager();

  return async (message: string) => {
    return new Promise((resolve) => {
      openModal({
        title: "Confirm",
        content: message,
        onClose: () => resolve(false),
        footer: (
          <>
            <UiCancelButton
              onClick={() => {
                closeModal();
                resolve(false);
              }}
            />
            <UiConfirmButton
              onClick={() => {
                closeModal();
                resolve(true);
              }}
            />
          </>
        ),
      });
    });
  };
};

export default useConfirm;
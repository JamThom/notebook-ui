import useModalManager from "../useModalManager/useModalManager";

const useConfirm = () => {
    const { openModal } = useModalManager();

    return async (message: string) => {
        return new Promise((resolve) => {
            openModal({
                title: "Confirm",
                content: message,
                footer: (
                    <>
                        <button onClick={() => resolve(true)}>Confirm</button>
                        <button onClick={() => resolve(false)}>Cancel</button>
                    </>
                ),
            });
        });
    }
};

export default useConfirm;
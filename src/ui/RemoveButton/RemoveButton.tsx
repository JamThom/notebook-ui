import useConfirm from "@/ui-hooks/useConfirm/useConfirm";
import { UiButtonProps } from "../Button/Button";
import UiButton from "../Button/Button";

type UiRemoveButtonProps = Omit<UiButtonProps, "icon"|"variant"|'onClick'> & {
  onRemove: () => void;
};

const UiRemoveButton = ({
  onRemove,
  children,
  ...args
}: UiRemoveButtonProps) => {

  const confirm = useConfirm();

  const handleRemove = async () => {
    const confirmed = await confirm("Are you sure you want to remove this item?");
    if (confirmed) {
      onRemove();
    }
  };

  return (
    <UiButton {...args} icon="times" variant="danger" onClick={handleRemove}>
      {children || "Remove"}
    </UiButton>
  );
};

export default UiRemoveButton;

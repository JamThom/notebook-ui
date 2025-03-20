import { UiButtonProps } from "../Button/Button";
import UiButton from "../Button/Button";

type UiCancelButtonProps = Omit<UiButtonProps, "icon"|"variant">;

const UiCancelButton = (args: UiCancelButtonProps) => {

  return (
    <UiButton {...args} icon="times" variant="secondary">
      {args.children || "Cancel"}
    </UiButton>
  );
};

export default UiCancelButton;

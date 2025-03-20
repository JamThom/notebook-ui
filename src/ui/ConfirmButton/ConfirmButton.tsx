import { UiButtonProps } from "../Button/Button";
import UiButton from "../Button/Button";

type UiConfirmButtonProps = Omit<UiButtonProps, "icon"|"variant">;

const UiConfirmButton = (args: UiConfirmButtonProps) => {

  return (
    <UiButton variant="ok" {...args} icon="check">
      {args.children || "Confirm"}
    </UiButton>
  );
};

export default UiConfirmButton;

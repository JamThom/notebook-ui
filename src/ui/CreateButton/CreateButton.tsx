import { UiButtonProps } from "../Button/Button";
import UiButton from "../Button/Button";

type UiCreateButtonProps = Omit<UiButtonProps, "icon"|"variant">;

const UiCreateButton = (args: UiCreateButtonProps) => {

  return (
    <UiButton {...args} icon="plus" variant="primary" />
  );
};

export default UiCreateButton;

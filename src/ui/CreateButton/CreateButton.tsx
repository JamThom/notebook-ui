import { UiButtonProps } from "../Button/Button";
import UiButton from "../Button/Button";

type UiCreateButtonProps = Omit<UiButtonProps, "icon"|"variant"|'iconRight'>;

const UiCreateButton = (args: UiCreateButtonProps) => {

  return (
    <UiButton {...args} icon="plus" iconRight variant="primary" />
  );
};

export default UiCreateButton;

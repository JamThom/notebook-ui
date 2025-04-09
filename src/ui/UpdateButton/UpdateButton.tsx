import { UiButtonProps } from "../Button/Button";
import UiButton from "../Button/Button";

type UiUpdateButtonProps = Omit<UiButtonProps, "icon"|"variant"|'iconRight'>;

const UiUpdateButton = (args: UiUpdateButtonProps) => {

  return (
    <UiButton {...args} icon="check" variant="primary">
      {args.children??'Update'}
    </UiButton>
  );
};

export default UiUpdateButton;

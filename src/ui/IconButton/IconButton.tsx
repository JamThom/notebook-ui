import { Button, ButtonProps, Spinner } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import UiIcon from "../Icon/Icon";
import { UiButtonProps } from "../Button/Button";

type UiIconButtonProps = Omit<UiButtonProps, "children">;

const UiIconButton = ({ icon, onClick, size }: UiIconButtonProps) => {
  const [pending, setPending] = useState(false);

  const handleClick = async () => {
    if (onClick) {
      setPending(true);
      await onClick();
      setPending(false);
    }
  };

  return (
    <Button width="3" size={size || "md"} disabled={pending} onClick={handleClick}>
      {pending ? <Spinner size="sm" color="white" /> : <UiIcon icon={icon} />}
    </Button>
  );
};

export default UiIconButton;

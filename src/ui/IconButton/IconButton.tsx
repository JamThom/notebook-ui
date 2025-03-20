import { Button, ButtonProps, Spinner } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import UiIcon from "../Icon/Icon";

type UiIconButtonProps = {
  onClick?: () => void | Promise<void>;
  icon: IconProp;
  size?: ButtonProps["size"];
};

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
    <Button size={size || "md"} disabled={pending} onClick={handleClick}>
      {pending ? <Spinner size="sm" color="white" /> : <UiIcon icon={icon} />}
    </Button>
  );
};

export default UiIconButton;

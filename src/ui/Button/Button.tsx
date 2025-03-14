import { Button, ButtonProps, Spinner } from "@chakra-ui/react";
import { use, useMemo, useState } from "react";

type UiButtonProps = {
  type: ButtonProps["type"];
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void|Promise<void>;
  width?: string;
  children: React.ReactNode;
  isPending?: boolean;
};

const UiButton = ({
  type,
  width,
  variant,
  onClick,
  children,
  isPending
}: UiButtonProps) => {

  const [pending, setPending] = useState(isPending);

  useMemo(() => {
    setPending(isPending);
  }, [isPending]);

  const color = useMemo(() => {
    switch (variant) {
      case "primary":
        return "blue";
      case "secondary":
        return "gray";
      case "danger":
        return "red";
      default:
        return "gray";
    }
  }, [variant]);

  const handleClick = async () => {
    if (onClick) {
      setPending(true);
      await onClick();
      setPending(false);
    }
  }

  return (
    <Button
      type={type}
      colorScheme={color}
      size="sm"
      width={width||'100%'}
      disabled={pending}
      onClick={handleClick}>
      {pending ? (
        <Spinner size="sm" color="white" />
      ) : children}
    </Button>
  );
};

export default UiButton;

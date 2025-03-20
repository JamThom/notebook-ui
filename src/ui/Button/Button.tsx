import { Button, ButtonProps, Flex, Spinner } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useMemo, useState } from "react";
import UiIcon from "../Icon/Icon";

export type UiButtonProps = {
  type?: ButtonProps["type"];
  variant?: "primary" | "secondary" | "danger" | "ok";
  onClick?: () => void | Promise<void>;
  width?: string;
  children?: React.ReactNode;
  isPending?: boolean;
  size?: ButtonProps["size"];
  iconRight?: boolean;
  icon: IconProp;
};

const UiButton = ({
  type,
  width,
  variant,
  onClick,
  children,
  isPending,
  size,
  icon,
  iconRight,
}: UiButtonProps) => {
  const [pending, setPending] = useState(isPending);

  useMemo(() => {
    setPending(isPending);
  }, [isPending]);

  const color = useMemo(() => {
    switch (variant) {
      case "ok":
        return "green";
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
  };

  return (
    <Button
      type={type}
      colorScheme={color}
      size={size || "md"}
      width={width || "fit-content"}
      disabled={pending}
      position="relative"
      onClick={handleClick}
    >
        <Flex position="absolute" w="100%" h="100%" alignItems="center" justifyContent="center" top="0" left="0">
        <Spinner opacity={pending ? 1 : 0} size="sm" color="white" />
        </Flex>
        <Flex
          opacity={pending ? 0 : 1}
          alignItems="center"
          gap="1"
          flexDir={iconRight ? "row" : "row-reverse"}
        >
          {children}
          <UiIcon icon={icon} />
        </Flex>
    </Button>
  );
};

export default UiButton;

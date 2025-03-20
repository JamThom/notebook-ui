import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UiIconProps = {
  icon: IconProp;
  size?: SizeProp;
};

const UiIcon = ({
    icon,
    size
}: UiIconProps) => {

  return (
    <FontAwesomeIcon
        size={size||'sm'}
        icon={icon} />
  );
};

export default UiIcon;

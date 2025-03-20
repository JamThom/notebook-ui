import { Heading } from "@chakra-ui/react";

type UiHeadingProps = {
  children: React.ReactNode;
}

const UiHeading = ({ children }: UiHeadingProps) => {
  return (
    <Heading>
        {children}
    </Heading>
  )
}

export default UiHeading;
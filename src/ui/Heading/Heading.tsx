import { Heading, HeadingProps } from "@chakra-ui/react";

type UiHeadingProps = {
  children: React.ReactNode;
  mr: HeadingProps["mr"];
}

const UiHeading = ({ children, mr }: UiHeadingProps) => {
  return (
    <Heading size="lg" mr={mr}>
        {children}
    </Heading>
  )
}

export default UiHeading;
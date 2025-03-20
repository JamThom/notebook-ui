import { Heading, HeadingProps } from "@chakra-ui/react";

type UiHeadingProps = HeadingProps;

const UiHeading = (props: UiHeadingProps) => {
  return (
    <Heading  {...props} />
  )
}

export default UiHeading;
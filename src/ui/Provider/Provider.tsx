import theme from "@/theme";
import { ModalProvider } from "@/ui-hooks/useModalManager/useModalManager";
import { ChakraProvider } from "@chakra-ui/react";

type UiProviderProps = {
  children: React.ReactNode;
};

const UiProvider = ({ children }: UiProviderProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ModalProvider>{children}</ModalProvider>
    </ChakraProvider>
  );
};

export default UiProvider;
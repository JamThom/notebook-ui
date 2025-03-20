import { useToast as useChakraToast } from "@chakra-ui/react";

const useToast = () => {
  const toast = useChakraToast();

  const showToast = (
    message: string,
    status: "success" | "error" | "warning" | "info"
  ) => {
    toast({
      title: message,
      status,
      duration: 3000,
      isClosable: true,
    });
  };

  const showSuccessToast = (message: string) => {
    showToast(message, "success");
  };

  const showErrorToast = (message: string) => {
    showToast(message, "error");
  };

  const showWarningToast = (message: string) => {
    showToast(message, "warning");
  };

  const showInfoToast = (message: string) => {
    showToast(message, "info");
  };

  return {
    showSuccessToast,
    showErrorToast,
    showWarningToast,
    showInfoToast,
  };
};

export default useToast;

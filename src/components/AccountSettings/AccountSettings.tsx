import { useUpdateAccount, useGetAccount } from "@/api";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UiUpdateButton from "@/ui/UpdateButton/UpdateButton";
import UiCancelButton from "@/ui/CancelButton/CancelButton";
import useModalManager from "@/ui-hooks/useModalManager/useModalManager";

type AccountSettingsForm = {
    email: string;
    userName: string;
};

const AccountSettings = () => {

  const [isPending, setIsPending] = useState(false);

  const account = useGetAccount();

  const { closeModal } = useModalManager();
  
  const { register, handleSubmit } = useForm<AccountSettingsForm>({
    defaultValues: {
      email: account?.email,
      userName: account?.userName,
    },
  });

  const updateAccount = useUpdateAccount();

  const onSubmit = async (data: AccountSettingsForm) => {
    setIsPending(true);
    try {
      await updateAccount({
        email: data.email,
        userName: data.userName,
      });
    }
    catch (error) {
      setIsPending(false);
      return;
    }
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} marginBottom="2">
        <FormControl isRequired>
          <FormLabel>User name</FormLabel>
          <Input type="text" {...register("userName")} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register("email")} />
        </FormControl>
        <Flex justifyContent="space-between">
          <UiCancelButton onClick={closeModal} />
          <UiUpdateButton type="submit" width="fitContent" isPending={isPending} />
        </Flex>
      </Stack>
    </form>
  );
};

export default AccountSettings;

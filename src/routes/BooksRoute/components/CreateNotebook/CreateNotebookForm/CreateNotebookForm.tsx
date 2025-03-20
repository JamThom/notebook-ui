import { useCreateBook } from "../../../../../api";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import UiCreateButton from "../../../../../ui/CreateButton/CreateButton";
import UiCancelButton from "../../../../../ui/CancelButton/CancelButton";

type NotebookForm = {
  notebookName: string;
};

const CreateNotebookForm = ({
  onCancel,
}: {
  onCancel: () => void;
}) => {

  const [isPending, setIsPending] = useState(false);
  
  const { register, handleSubmit } = useForm<NotebookForm>();

  const navigate = useNavigate();

  const createBook = useCreateBook();

  const onSubmit = async (data: NotebookForm) => {
    setIsPending(true);
    const { id } = await createBook({
        name: data.notebookName,
    });
    setIsPending(false);
    navigate(`/books/${id}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} marginBottom="2">
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" {...register("notebookName")} />
        </FormControl>
        <Flex justifyContent="space-between">
          <UiCancelButton onClick={onCancel} width="fitContent">Cancel</UiCancelButton>
          <UiCreateButton type="submit" width="fitContent" isPending={isPending}>
            Create
          </UiCreateButton>
        </Flex>
      </Stack>
    </form>
  );
};

export default CreateNotebookForm;

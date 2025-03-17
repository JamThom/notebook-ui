import UiButton from "../../../../../ui/Button/Button";
import { useCreateBook } from "../../../../../api";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

type NotebookForm = {
  notebookName: string;
};

const CreateNotebookForm = () => {

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
          <UiButton width="fitContent">Cancel</UiButton>
          <UiButton type="submit" variant="primary" width="fitContent" isPending={isPending}>
            Create
          </UiButton>
        </Flex>
      </Stack>
    </form>
  );
};

export default CreateNotebookForm;

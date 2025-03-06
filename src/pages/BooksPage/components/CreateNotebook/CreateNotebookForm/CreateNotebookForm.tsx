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

type NotebookForm = {
  notebookName: string;
};

const CreateNotebookForm = () => {
  const { register, handleSubmit } = useForm<NotebookForm>();

  const createBook = useCreateBook();

  const onSubmit = async (data: NotebookForm) => {
    createBook.mutate({
        name: data.notebookName,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" {...register("notebookName")} />
        </FormControl>
        <Flex>
          <Button size="sm">Cancel</Button>
          <Button type="submit" colorScheme="blue" size="sm">
            Create
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default CreateNotebookForm;

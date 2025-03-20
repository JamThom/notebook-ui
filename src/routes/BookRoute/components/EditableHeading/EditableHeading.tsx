import { useGetCurrentBook, useUpdateBook, useUpdateCurrentBook } from "@/api";
import UiHeading from "@/ui/Heading/Heading";
import UiIcon from "@/ui/Icon/Icon";
import UiIconButton from "@/ui/IconButton/IconButton";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const EditableHeading = () => {
  const book = useGetCurrentBook();
  const updateBook = useUpdateCurrentBook();
  const [isEditMode, setIsEditMode] = useState(false);

  const [bookName, setBookName] = useState<string>();

  useEffect(() => {
    setBookName(book?.name);
  }, [book?.name]);

  const onSave = async () => {
    if (bookName) {
      await updateBook({ name: bookName });
    }
    setIsEditMode(false);
  };

  return (
    <>
      <Flex
        alignItems="center"
        cursor="pointer"
        contentEditable
        gap="2"
        _focus={{ outline: "none" }}
        onInput={(e) => setBookName(e.currentTarget.textContent ?? "")}
        role="group"
        width="fit-content"
        opacity={book ? 1 : 0}
        transition="opacity 0.3s"
        mr="auto"
      >
        <UiHeading>{book?.name}</UiHeading>
        {bookName !== book?.name ? (
            <UiIconButton variant="ok" onClick={onSave} icon="check" />
        ) : (
          <Box _groupHover={{ opacity: 1 }} opacity={0} transition="0.2s">
            <UiIcon size="lg" icon="pen" />
          </Box>
        )}
      </Flex>
    </>
  );
};

export default EditableHeading;

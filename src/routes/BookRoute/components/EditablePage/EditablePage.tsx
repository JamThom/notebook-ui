import { Box, Flex, Textarea } from "@chakra-ui/react";
import { Book } from "@/types/api";
import { useDeletePage } from "@/api/queries/pages";
import usePageContent from "./usePageContent";
import UiRemoveButton from "@/ui/RemoveButton/RemoveButton";
import { useGetCurrentBook } from "@/api";

interface EditablePageProps {
  page: Book["pages"][0];
  connection: signalR.HubConnection;
}

const EditablePage = ({ page, connection }: EditablePageProps) => {
  const [editableBookContent, setEditableBookContent] = usePageContent(
    page,
    connection
  );

  const book = useGetCurrentBook();

  const deletePage = useDeletePage();

  const removePage = async () => {
    await deletePage({
      ...page,
      bookId: book?.id as string,
    });
  };

  return (
    <Box
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <Textarea
        style={{
          width: "100%",
          height: "calc(100vh - 110px)",
          border: 0,
          borderRadius: "0",
          backgroundColor: "white",
          boxShadow: "rgb(0 0 0 / 6%) 0px 8px 25px 6px",
          overflowY: "auto",
          padding: "10px",
        }}
        value={editableBookContent}
        onChange={(e) => setEditableBookContent(e.target.value)}
        placeholder="Edit book content here..."
        size="lg"
      />
      <Flex
        style={{
          position: "absolute",
          right: "20px",
          bottom: "20px",
        }}
        mt={4}
      >
        {
          book && book.pages.length > 1 && (
            <UiRemoveButton onRemove={removePage} />
          )
        }
      </Flex>
    </Box>
  );
};

export default EditablePage;

import { Box, Flex, Textarea } from "@chakra-ui/react";
import { Book } from "@/types/api";
import { useDeletePage } from "@/api/queries/pages";
import { useParams } from "react-router";
import usePageContent from "./usePageContent";
import UiButton from "@/ui/Button/Button";
import UiRemoveButton from "@/ui/RemoveButton/RemoveButton";

interface EditablePageProps {
  page: Book["pages"][0];
  connection: signalR.HubConnection;
}

const EditablePage = ({ page, connection }: EditablePageProps) => {
  const [editableBookContent, setEditableBookContent] = usePageContent(
    page,
    connection
  );

  const bookId = useParams<{ bookId: string }>().bookId;

  const deletePage = useDeletePage();

  const removePage = () => {
    deletePage({
      ...page,
      bookId: bookId as string,
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
          height: "80vh",
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
        <UiRemoveButton onRemove={removePage} />
      </Flex>
    </Box>
  );
};

export default EditablePage;

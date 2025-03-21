import { Box, Flex } from "@chakra-ui/react";
import { Book } from "@/types/api";
import { useDeletePage } from "@/api";
import UiRemoveButton from "@/ui/RemoveButton/RemoveButton";
import { useGetCurrentBook } from "@/api";
import useSelectionState from "./useSelectionState";
import Toolbar from "./Toolbar/Toolbar";
import Contents from "./Contents/Contents";

interface EditablePageProps {
  page: Book["pages"][0];
  connection: signalR.HubConnection;
}

const EditablePage = ({ page, connection }: EditablePageProps) => {

  const book = useGetCurrentBook();

  const deletePage = useDeletePage();

  const removePage = async () => {
    await deletePage({
      ...page,
      bookId: book?.id as string,
    });
  };

  const { unSelect, beginSelect, replaceSelection, selectedCoords } = useSelectionState();

  return (
    <Box
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      {selectedCoords && (
        <Toolbar
          unSelect={unSelect}
          replaceSelection={replaceSelection}
          selectedCoords={selectedCoords}
        />
      )}
      <Contents page={page} connection={connection} isSelection={!!selectedCoords} beginSelect={beginSelect} />
      <Flex
        style={{
          position: "absolute",
          right: "20px",
          bottom: "20px",
        }}
        mt={4}
      >
        {book && book.pages.length > 1 && (
          <UiRemoveButton onRemove={removePage} />
        )}
      </Flex>
    </Box>
  );
};

export default EditablePage;

import React, { useState } from "react";
import { border, Box, Button, Textarea } from "@chakra-ui/react";
import { Book } from "../../../../types/api/api";
import { useDeletePage } from "../../../../api/queries/pages";

interface EditablePageProps {
  page: Book['pages'][0];
  connection: signalR.HubConnection;
}

const EditablePage = ({ 
    page,
    connection
}: EditablePageProps) => {

  const [editableBookContent, setEditableBookContent] = useState(page.content?? "");

  const handleContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setEditableBookContent(e.target.value);
    try {
      connection.send("SendMessage", {
          id: page.id,
          content: e.target.value,
        })
        .catch((err) => {
          console.error("Error invoking SendMessage: ", err);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const deletePage = useDeletePage();

  const removePage = () => {
    deletePage(page.id);
  };

  return (
    <Box style={{
        width: "100%",
        position: "relative",
    }}>
      <Textarea
        style={{
            width: "100%",
            height: "1200px",
            border: 0,
            borderRadius: "0",
            backgroundColor: "white",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.04)",
        }}
        value={editableBookContent}
        onChange={handleContentChange}
        placeholder="Edit book content here..."
        size="lg"
      />
      <Button
        style={{
            position: "absolute",
            right: "20px",
            bottom: "20px",
        }}
        mt={4}
        onClick={removePage}>
        Remove
    </Button>
    </Box>
  );
};

export default EditablePage;

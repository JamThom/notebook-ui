import { useState, useRef } from "react";
import { Box, Button, Textarea } from "@chakra-ui/react";
import { Book } from "../../../../types/api/api";
import { useDeletePage } from "../../../../api/queries/pages";
import { useParams } from "react-router";

const getTextCoordinates = (element: HTMLElement, text: string) => {
  const ranges = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);

  while (walker.nextNode()) {
    const textNode = walker.currentNode;
    let startIndex = textNode.nodeValue?.indexOf(text) ?? -1;

    while (startIndex !== -1) {
      const range = document.createRange();
      range.setStart(textNode, startIndex);
      range.setEnd(textNode, startIndex + text.length);
      const rect = range.getBoundingClientRect();
      ranges.push({ x: rect.left, y: rect.top });

      startIndex = textNode.nodeValue?.indexOf(text, startIndex + text.length) ?? -1;
    }
  }

  return ranges;
};

interface EditablePageProps {
  page: Book["pages"][0];
  connection: signalR.HubConnection;
}

const EditablePage = ({ page, connection }: EditablePageProps) => {
  const [editableBookContent, setEditableBookContent] = useState(
    page.content ?? ""
  );
  const contentEditableRef = useRef<HTMLTextAreaElement>(null);

  const handleContentChange = (e: any) => {
    if (contentEditableRef.current) {
      const content = contentEditableRef.current.value;
      setEditableBookContent(content);
      try {
        connection
          .send("SendMessage", {
            id: page.id,
            content: content,
          })
          .catch((err) => {
            console.error("Error invoking SendMessage: ", err);
          });
      } catch (e) {
        console.log(e);
      }
      setCoordinates(getTextCoordinates(contentEditableRef.current, "test"));
      console.log(coordinates);
    }
  };

  const [coordinates, setCoordinates] = useState<{ x: number; y: number }[]>([]);

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
      {coordinates.map((coord, index) => (
        <Box
        
          key={index}
          style={{
            position: "absolute",
            left: coord.x,
            top: coord.y,
            width: "10px",
            height: "10px",
            backgroundColor: "red",
          }}
        />
      ))}
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
        ref={contentEditableRef}
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
        onClick={removePage}
      >
        Remove
      </Button>
    </Box>
  );
};

export default EditablePage;
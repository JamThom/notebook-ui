import { Box } from "@chakra-ui/react";
import { Book } from "@/types/api";
import usePageContent from "./usePageContent";
import { useEffect, useRef } from "react";

interface ContentsProps {
  page: Book["pages"][0];
  connection: signalR.HubConnection;
  isSelection: boolean;
  beginSelect: () => void;
}

const Contents = ({
  page,
  connection,
  beginSelect,
}: ContentsProps) => {
  const [editableBookContent, setEditableBookContent] = usePageContent(
    page,
    connection
  );

  const contentEditableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentEditableRef.current) {
      contentEditableRef.current.innerHTML = editableBookContent;
    }
  }, []);

  const handleContentEditableInput = () => {
    const content = contentEditableRef.current?.innerHTML ?? "";
    setEditableBookContent(content);
  };

  return (
    <Box
      style={{
        width: "100%",
        height: "calc(100vh - 110px)",
        border: 0,
        borderRadius: "0",
        backgroundColor: "white",
        boxShadow: "rgb(0 0 0 / 6%) 0px 8px 25px 6px",
        overflowY: "auto",
        minHeight: "200px",
    }}
    padding="10"
      _focus={{
        outline: "none",
      }}
      sx={{
        h1: {
          fontSize: "2xl",
          fontWeight: "bold",
          display: "inline-block",
        },
        ul: {
            paddingLeft: "1em",
        },
      }}
      ref={contentEditableRef}
      contentEditable
      onInput={handleContentEditableInput}
      onMouseUp={beginSelect}
    />
  );
};

export default Contents;

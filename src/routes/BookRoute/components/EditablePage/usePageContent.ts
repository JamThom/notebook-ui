import { useState, useEffect } from "react";
import { Page } from "../../../../types/api/api";
import { useDebounce } from 'use-debounce';

const usePageContent = (page: Page, connection: signalR.HubConnection) => {
  const [editableBookContent, setEditableBookContent] = useState(
    page.content ?? ""
  );

  const sendContent = (content: string) => {
    try {
      connection
        .send("SendMessage", {
          id: page.id,
          content: content,
        })
        .catch((err) => {
          console.error("Error invoking SendMessage: ", err);
        });
    }
    catch (e) {
      console.log(e);
    }
  };

  const [debouncedContent] = useDebounce(editableBookContent, 1000);

  useEffect(() => {
    sendContent(debouncedContent);
  }, [debouncedContent]);

  return [
    editableBookContent,
    setEditableBookContent
  ] as const;

};

export default usePageContent;
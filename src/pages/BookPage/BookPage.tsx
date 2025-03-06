import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Textarea, Button } from "@chakra-ui/react";
import { BookPageParams } from "../../types/route-params";
import { useGetBook } from "../../api";
import * as si from "@microsoft/signalr";

let connection = new si.HubConnectionBuilder()
  .withUrl("http://localhost:5090/pagehub")
  .build();

connection.on("send", (data) => {
  console.log(data);
});

// connection.start().then(() => connection.invoke("send", "Hello"));

const BookPage = () => {
  const { bookId } = useParams<BookPageParams>();
  console.log(bookId);
  const book = useGetBook({ id: bookId as string });

  const [editableBookContent, setEditableBookContent] = useState("");

  const handleContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setEditableBookContent(e.target.value);
  };

  const handleSave = () => {
    // Logic to save the edited book content
  };

  if (book.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <h1>{book.data?.name}</h1>
      <Textarea
        value={editableBookContent}
        onChange={handleContentChange}
        placeholder="Edit book content here..."
        size="lg"
      />
      <Button onClick={handleSave} mt={4}>
        Save
      </Button>
    </Box>
  );
};

export default BookPage;

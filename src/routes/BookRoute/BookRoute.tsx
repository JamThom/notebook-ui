import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Textarea, Button, Heading, Flex } from "@chakra-ui/react";
import { BookParams } from "../../types/route-params";
import { useGetBook } from "../../api";
import * as signalR from "@microsoft/signalr";
import { useCreatePage } from "../../api/queries/pages";
import EditablePage from "./components/EditablePage/EditablePage";
import AddPage from "./components/AddPage/AddPage";

const BookRoute = () => {
  const { bookId } = useParams<BookParams>();
  const book = useGetBook({ id: bookId as string });
  const [connection, setConnection] = useState<signalR.HubConnection>();

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5090/pagehub", {
        withCredentials: true,
      })
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then(() => console.log("Connected to WebSocket"))
      .catch((err) => console.error("Connection failed: ", err));

    connection.on("ReceiveMessage", (message) => {
      console.log("Message received: ", message);
    });

    setConnection(connection);

    return () => {
      connection.stop().then(() => console.log("Disconnected from WebSocket"));
    };
  }, []);

  if (book.isLoading || !connection) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        padding: "30px",
        backgroundColor: "grey.400",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          maxWidth: "900px",
          width: "80vw",
        }}
      >
        <Flex
            style={{
              width: "100%",
              justifyContent: "space-between",
            }}
          >
          <Heading>
            {book.data?.name}
          </Heading>
          <AddPage />
        </Flex>
        {book.data?.pages.map((page) => (
          <EditablePage key={page.id} page={page} connection={connection} />
        ))}
      </Box>
    </Box>
  );
};

export default BookRoute;

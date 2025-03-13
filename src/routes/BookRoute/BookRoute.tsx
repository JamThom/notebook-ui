import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { BookParams } from "../../types/route-params";
import { useGetBook } from "../../api";
import * as signalR from "@microsoft/signalr";
import EditablePage from "./components/EditablePage/EditablePage";
import AddPage from "./components/AddPage/AddPage";
import getBaseUrl from '../../api/utils/getBaseUrl';

const BookRoute = () => {
  const { bookId } = useParams<BookParams>();
  const book = useGetBook({ id: bookId as string });
  const [connection, setConnection] = useState<signalR.HubConnection>();

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`${getBaseUrl()}/pagehub`, {
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
          paddingTop: "50px",
        }}
      >
        <Flex
          style={{
            width: "100vw",
            position: "fixed",
            zIndex: 1,
            top: "0",
            left: "0",
            right: "0",
            padding: "20px",
            justifyContent: "center",
            background: "#f8fafc",
            overflow: "hidden",
          }}
        >
          <Box
            style={{
              height: "100px",
              background: "#ff000000",
              position: "absolute",
              top: "100%",
              width: "80vw",
              maxWidth: "900px",
              boxShadow: "rgba(0, 0, 0, 0.06) 0px -5px 25px 6px",
            }}
          />
          <Flex
            style={{
              maxWidth: "900px",
              width: "80vw",
              justifyContent: "space-between",
            }}
          >
            <Heading>{book.data?.name}</Heading>
            <AddPage />
          </Flex>
        </Flex>
        {book.data?.pages.map((page) => (
          <EditablePage key={page.id} page={page} connection={connection} />
        ))}
      </Box>
    </Box>
  );
};

export default BookRoute;

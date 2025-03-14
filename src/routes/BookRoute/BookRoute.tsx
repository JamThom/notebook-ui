import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { BookParams } from "../../types/route-params";
import { useGetBook } from "../../api";
import * as signalR from "@microsoft/signalr";
import EditablePage from "./components/EditablePage/EditablePage";
import AddPage from "./components/AddPage/AddPage";
import getBaseUrl from "../../api/utils/getBaseUrl";
import Back from "./components/Back/Back";
import HeaderWrap from "./components/HeaderWrap/HeaderWrap";
import BookWrapper from "./components/BookWrapper/BookWrapper";

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
    <>
      <Back />
      <BookWrapper>
        <HeaderWrap>
          <Heading>{book.data?.name}</Heading>
          <AddPage />
        </HeaderWrap>
        {book.data?.pages.map((page) => (
          <EditablePage key={page.id} page={page} connection={connection} />
        ))}
      </BookWrapper>
    </>
  );
};

export default BookRoute;

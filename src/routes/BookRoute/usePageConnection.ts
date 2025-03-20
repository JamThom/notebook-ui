import { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import getBaseUrl from "@/api/utils/getBaseUrl";

const usePageConnection = () => {

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

  return connection;

};

export default usePageConnection;

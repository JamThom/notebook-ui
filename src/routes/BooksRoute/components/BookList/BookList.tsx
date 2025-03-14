import React from "react";
import { Box, Grid, Spinner, Text } from "@chakra-ui/react";
import { useGetBooks } from "../../../../api";
import Book from "./Book/Book";
import CreateNotebook from "../CreateNotebook/CreateNotebook";

const BookList: React.FC = () => {
  const books = useGetBooks();

  return Array.isArray(books) ? (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
      {books?.map((book) => <Book key={book.id} book={book} />)}
      <CreateNotebook />
    </Grid>
  ) : (
    <Box textAlign="center">
      <Spinner size="xl" />
      <Text>Loading...</Text>
    </Box>
  );
};

export default BookList;

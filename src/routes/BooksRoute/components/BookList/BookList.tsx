import React from "react";
import { Box, Grid, Spinner, Text } from "@chakra-ui/react";
import { useGetBooks } from "../../../../api";
import Book from "./Book/Book";
import CreateNotebook from "../CreateNotebook/CreateNotebook";

const BookList: React.FC = () => {
  const books = useGetBooks();

  return books.isLoading ? (
    <Box textAlign="center">
      <Spinner size="xl" />
      <Text>Loading...</Text>
    </Box>
  ) : (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
      {books.data?.map((book) => <Book key={book.id} book={book} />)}
      <CreateNotebook />
    </Grid>
  );
};

export default BookList;

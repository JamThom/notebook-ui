import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import BookList from "./components/BookList/BookList";

const BooksRoute: React.FC = () => {
  return (
    <Box p={4}>
      <Flex justifyContent={"space-between"} mb={4}>
        <Heading as="h1" size="lg" mb={0}>
          Notebooks
        </Heading>
      </Flex>
      <BookList />
    </Box>
  );
};

export default BooksRoute;

import React, { useEffect, useState } from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { useGetBooks } from '../../../../api';
import Book from './Book/Book';

const BookList: React.FC = () => {

    const books = useGetBooks();

    return books.isLoading ? (
        <Box textAlign="center">
            <Spinner size="xl" />
            <Text>Loading...</Text>
        </Box>
    ) :(
        <Box>
            {books.data?.map((book) => (
                <Book key={book.id} book={book} />
            ))}
        </Box>
    );
};

export default BookList;
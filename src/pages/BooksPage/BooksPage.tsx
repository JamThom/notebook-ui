import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import BookList from './components/BookList/BookList';

const BooksPage: React.FC = () => {
    return (
        <Box p={4}>
            <Heading as="h1" size="lg" mb={4}>
                Books
            </Heading>
            <BookList />
        </Box>
    );
};

export default BooksPage;
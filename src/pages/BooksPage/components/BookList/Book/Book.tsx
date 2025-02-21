import { Box, Heading } from '@chakra-ui/react';
import { Book as ApiBook } from '@/types/api/api';

interface BookProps {
  book: ApiBook;
}

const Book: React.FC<BookProps> = ({ book }) => {

  return (
    <Box>
      <Heading as="h2" size="lg">{book.name}</Heading>
    </Box>
  );
};

export default Book;
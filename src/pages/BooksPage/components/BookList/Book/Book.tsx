import { Box, Heading } from "@chakra-ui/react";
import { Book as ApiBook } from "@/types/api/api";
import { Link } from "react-router";
import routes from "../../../../../config/routes";
import getRouteUrl from "../../../../../api/utils/getRouteUrl";

interface BookProps {
  book: ApiBook;
}

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <Box>
      <Link to={getRouteUrl(routes.book, { bookId: book.id })}>
        <Heading as="h2" size="lg">
          {book.name}
        </Heading>
      </Link>
    </Box>
  );
};

export default Book;

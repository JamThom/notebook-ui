import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import { Book as ApiBook } from "@/types/api/api";
import { Link } from "react-router";
import routes from "../../../../../config/routes";
import getRouteUrl from "../../../../../api/utils/getRouteUrl";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BookProps {
  book: ApiBook;
}

const Book: React.FC<BookProps> = ({ book }) => {
  const [isRenaming, setIsRenaming] = useState(false);
  const [name, setName] = useState(book.name);

  const handleStartRenaming: React.MouseEventHandler<HTMLHeadingElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRenaming(true);
  };

  const handleRename = async () => {
    setIsRenaming(false);
  };

  return (
    <Link to={getRouteUrl(routes.book, { bookId: book.id })}>
      <Flex flexDirection="column">
        <Flex
          borderRadius="2px"
          padding="2px"
          paddingTop="1px"
          background="#111"
          margin="0 auto 20px"
        >
          {[0, 1].map((pageIndex) => {
            const page = book.pages[pageIndex];
            return (
              <Box
                height="140px"
                background={
                  pageIndex === 0
                    ? "linear-gradient(90deg, #ffffff 70%, #f7f7f7)"
                    : "linear-gradient(-90deg, #ffffff 70%, #f7f7f7)"
                }
                borderLeft={pageIndex === 1 ? "1px #8080805c solid" : undefined}
                width="110px"
                borderRadius="1px"
                key={page?.id}
              >
                {page?.content ?? ""}
              </Box>
            );
          })}
        </Flex>
        {isRenaming ? (
          <Flex>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={handleRename}
            />
            <FontAwesomeIcon icon="check" onClick={handleRename} />
            <FontAwesomeIcon
              icon="times"
              onClick={() => setIsRenaming(false)}
            />
          </Flex>
        ) : (
          <Heading onClick={handleStartRenaming} textAlign="center" as="h2" size="lg">
            {book.name}
          </Heading>
        )}
      </Flex>
    </Link>
  );
};

export default Book;

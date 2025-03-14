import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { Book as ApiBook } from "@/types/api";
import { Link } from "react-router";
import routes from "../../../../../config/routes";
import getRouteUrl from "../../../../../api/utils/getRouteUrl";
import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BookProps {
  book: ApiBook;
}

const getPageStyle = (pageIndex: number) => {
  return {
    height: "120px",
    fontSize: "5px",
    padding: "8px",
    boxShadow: "0 0 3px #00000036",
    background:
      pageIndex === 0
        ? "linear-gradient(90deg, #ffffff 70%, #f9f9f9 95%, #dedede)"
        : "linear-gradient(-90deg, #f9f9f9 70%, #f5f5f5 95%, #dedede)",
    borderLeft: pageIndex === 1 ? "1px #808080 solid" : undefined,
    width: "100px",
  };
};

const getBg = (id: string) => {
  const idToInt = id.indexOf("6") % 9;
  switch (idToInt) {
    case 0:
      return "linear-gradient(90deg, rgb(255 243 246), rgb(255 224 233), rgb(248 238 240))";
    case 2:
      return "linear-gradient(90deg, rgb(138 138 181), rgb(83 81 216), rgb(134 134 176))";
    case 3:
      return "linear-gradient(90deg, rgb(148 159 150), rgb(39 113 62), rgb(144 154 145))";
    case 4:
      return "linear-gradient(90deg, rgb(180 180 180), rgb(136 136 136), rgb(189 189 189))";
    case 5:
      return "linear-gradient(90deg, rgb(255 240 217), rgb(228 225 186), rgb(247 234 211))";
    case 6:
      return "linear-gradient(90deg, rgb(238 211 219), rgb(255 190 209), rgb(234 203 212))";
    case 7:
      return "linear-gradient(90deg, rgb(104 104 207), rgb(66 65 131), rgb(99 99 197))";
    case 8:
      return "linear-gradient(90deg, rgb(207 135 104), rgb(193 162 148), rgb(220 166 143))";
  }
};

const Book: React.FC<BookProps> = ({ book }) => {
  const [isRenaming, setIsRenaming] = useState(false);
  const [name, setName] = useState(book.name);

  const allTextContent = useMemo(() => {
    return book.pages.map((page) => page.content).join(" ");
  }, [book.pages]);

  const handleStartRenaming: React.MouseEventHandler<HTMLHeadingElement> = (
    e
  ) => {
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
          borderRadius="3px"
          padding="1px 2px 3px"
          background={getBg(book.id)}
          margin="0 auto 20px"
        >
          {[0, 1].map((pageIndex) => {
            const pageLength = 450;
            const pageContent =
              pageIndex === 0
                ? allTextContent.slice(0, pageLength)
                : allTextContent.slice(pageLength);
            return (
              <Stack gap="0" key={pageContent}>
                <Box {...getPageStyle(pageIndex)}>
                  <Text marginBottom="1" fontWeight="bold">{book.name}</Text>
                  <Text height="85px" overflow="hidden">{pageContent}</Text>
                  <Text marginTop="1" textAlign="center">{pageIndex + 1}</Text>
                </Box>
                <Box
                  {...getPageStyle(pageIndex)}
                  height="2px"
                  padding="0"
                  borderTop="1px #ddd solid"
                />
                <Box
                  {...getPageStyle(pageIndex)}
                  height="2px"
                  padding="0"
                  borderTop="1px #ddd solid"
                />
              </Stack>
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
          <Heading
            onClick={handleStartRenaming}
            textAlign="center"
            as="h3"
            size="md"
          >
            {book.name}
          </Heading>
        )}
      </Flex>
    </Link>
  );
};

export default Book;

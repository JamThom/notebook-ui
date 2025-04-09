import { useGetCurrentBook } from "@/api";
import EditablePage from "./components/EditablePage/EditablePage";
import AddPage from "./components/AddPage/AddPage";
import Back from "./components/Back/Back";
import HeaderWrap from "./components/HeaderWrap/HeaderWrap";
import BookWrapper from "./components/BookWrapper/BookWrapper";
import usePageConnection from "./usePageConnection";
import DeleteBook from "./components/DeleteBook/DeleteBook";
import { Flex } from "@chakra-ui/react";
import EditableHeading from "./components/EditableHeading/EditableHeading";
import styles from "./BookRoute.styles";

const BookRoute = () => {
  const book = useGetCurrentBook();
  const connection = usePageConnection();

  return (
    <>
      <BookWrapper>
        <HeaderWrap>
          <Back />
          <EditableHeading />
          <DeleteBook />
          <AddPage />
        </HeaderWrap>
        {connection && book ? (
          book.pages.map((page) => (
            <EditablePage key={page.id} page={page} connection={connection} />
          ))
        ) : (
          <Flex sx={styles.container} />
        )}
      </BookWrapper>
    </>
  );
};

export default BookRoute;

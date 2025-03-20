import { useParams } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { BookParams } from "../../types/route-params";
import { useGetBook } from "../../api";
import EditablePage from "./components/EditablePage/EditablePage";
import AddPage from "./components/AddPage/AddPage";
import Back from "./components/Back/Back";
import HeaderWrap from "./components/HeaderWrap/HeaderWrap";
import BookWrapper from "./components/BookWrapper/BookWrapper";
import usePageConnection from "./usePageConnection";

const BookRoute = () => {
  const { bookId } = useParams<BookParams>();
  const book = useGetBook({ id: bookId as string });
  const connection = usePageConnection();

  if (!book || !connection) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Back />
      <BookWrapper>
        <HeaderWrap>
          <Heading>{book?.name}</Heading>
          <AddPage />
        </HeaderWrap>
        {book?.pages.map((page) => (
          <EditablePage key={page.id} page={page} connection={connection} />
        ))}
      </BookWrapper>
    </>
  );
};

export default BookRoute;

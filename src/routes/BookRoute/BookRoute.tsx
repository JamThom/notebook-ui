import { useGetCurrentBook } from "@/api";
import EditablePage from "./components/EditablePage/EditablePage";
import AddPage from "./components/AddPage/AddPage";
import Back from "./components/Back/Back";
import HeaderWrap from "./components/HeaderWrap/HeaderWrap";
import BookWrapper from "./components/BookWrapper/BookWrapper";
import usePageConnection from "./usePageConnection";
import UiHeading from "@/ui/Heading/Heading";

const BookRoute = () => {
  const book = useGetCurrentBook();
  const connection = usePageConnection();

  if (!book || !connection) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Back />
      <BookWrapper>
        <HeaderWrap>
          <UiHeading>{book?.name}</UiHeading>
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

import {
    BookResponse as Book,
    BooksResponse as Books,
    PageResponse as Page
} from './generated';

export type {
    CreateBookRequest,
    CreatePageRequest,
    LoginRequest,
    RegisterRequest,
    UpdateAccountRequest,
    UpdateBookRequest,
    BookResponse as Book,
    BooksResponse as Books,
    PageResponse as Page
} from './generated';


type MakeListResponse<T> = { items: T[] };
type MakeItemResponse<T> = { item: T };

export type BookResponse = MakeItemResponse<Book>;

export type BooksResponse = MakeListResponse<Books>;

export type PageResponse = MakeItemResponse<Page & { bookId: string }>;

export type AccountResponse = MakeItemResponse<{
        id: string;
        userName: string;
        email: string;
    }>;
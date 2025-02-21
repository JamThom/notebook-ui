import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Textarea, Button } from '@chakra-ui/react';
import { BookPageParams } from '@/types/route-params';
import { useGetBook } from '../../api';

const BookPage = () => {
    const { bookId } = useParams<BookPageParams>();
    const book = useGetBook({ id: bookId as string });

    const [editableBookContent, setEditableBookContent] = useState('');

    const handleContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setEditableBookContent(e.target.value);
    };

    const handleSave = () => {
        // Logic to save the edited book content
    };

    if (book.isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Box>
            <h1>{book.data?.name}</h1>
            <Textarea 
                value={editableBookContent} 
                onChange={handleContentChange} 
                placeholder="Edit book content here..." 
                size="lg" 
            />
            <Button onClick={handleSave} mt={4}>Save</Button>
        </Box>
    );
};

export default BookPage;
import UiIcon from "@/ui/Icon/Icon";
import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

interface EditableHeadingProps {
  bookName: string;
  onSave: (newName: string) => void;
}

const EditableHeading = ({ bookName, onSave }: EditableHeadingProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <>
      {isEditMode ? (
        <Flex>
          <input
            type="text"
            value={bookName}
            onChange={(e) => onSave(e.target.value)}
            onBlur={() => setIsEditMode(false)}
            autoFocus
          />
        </Flex>
      ) : (
        <Flex>
          <Heading>{bookName}</Heading>
          <UiIcon icon="edit" />
        </Flex>
      )}
    </>
  );
};

export default EditableHeading;

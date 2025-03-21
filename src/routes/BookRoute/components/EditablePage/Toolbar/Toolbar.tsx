import { useOutsideClick } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useRef } from "react";
import UiIconButton from "@/ui/IconButton/IconButton";

interface ToolbarProps {
  selectedCoords: { top: number; left: number } | null;
  unSelect: () => void;
  replaceSelection: (element: (selectedText: string) => HTMLElement) => void;
}

const Toolbar = ({
  selectedCoords,
  unSelect,
  replaceSelection,
}: ToolbarProps) => {

  const tooltip = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: tooltip,
    handler: () => unSelect(),
  });

  const formatSelectionAsBold = () => {
    createFormattedElement("strong");
  };

  const formatSelectionAsItalic = () => {
    createFormattedElement("em");
  };

  const formatSelectionAsUnderline = () => {
    createFormattedElement("u");
  };

  const formatSelectionAsHeading = () => {
    createFormattedElement("h1");
  };

  const createFormattedElement = (type: string) => {
    replaceSelection((selectedText: string) => {
      const element = document.createElement(type);
      element.textContent = selectedText as string;
      return element;
    });
  };

  const formatSelectionAsList = () => {
    replaceSelection((selectedText) => {
      const listParent = document.createElement("ul");
      const texts = selectedText?.split("\n");
      if (texts) {
        texts.forEach((text) => {
          const listItem = document.createElement("li");
          listItem.textContent = text;
          listParent.appendChild(listItem);
        });
      }
      return listParent;
    });
  };

  return (
    <Flex
      ref={tooltip}
      style={{
        position: "fixed",
        zIndex: 1000,
        top: selectedCoords?.top,
        left: selectedCoords?.left,
        padding: "10px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
        transform: "translate(-50%, -100%)",
        marginTop: "-10px",
        boxShadow: "0 0 10px #00000021",
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: "100%",
        left: "50%",
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "10px solid white",
        transform: "translate(-50%, 0)",
        zIndex: 1,
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: "100%",
        left: "50%",
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "10px solid #ccc",
        transform: "translate(-50%, 1px)",
      }}
    >
      <UiIconButton icon="list" onClick={formatSelectionAsList} />
      <UiIconButton icon="bold" onClick={formatSelectionAsBold} />
      <UiIconButton icon="italic" onClick={formatSelectionAsItalic} />
      <UiIconButton icon="underline" onClick={formatSelectionAsUnderline} />
      <UiIconButton icon="heading" onClick={formatSelectionAsHeading} />
    </Flex>
  );

};

export default Toolbar;

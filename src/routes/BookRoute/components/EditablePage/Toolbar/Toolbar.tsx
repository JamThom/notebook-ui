import { useOutsideClick } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useRef } from "react";
import UiIconButton from "@/ui/IconButton/IconButton";
import styles from "./Toolbar.styles";

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
      sx={styles.container}
      top={selectedCoords?.top}
      left={selectedCoords?.left}
      _before={styles.before}
      _after={styles.after}
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

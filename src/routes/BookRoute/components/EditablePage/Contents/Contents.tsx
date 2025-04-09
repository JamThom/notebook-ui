import { Box } from "@chakra-ui/react";
import { Book } from "@/types/api";
import usePageContent from "./usePageContent";
import { useEffect, useRef } from "react";
import styles from "./Contents.styles";

interface ContentsProps {
  page: Book["pages"][0];
  connection: signalR.HubConnection;
  isSelection: boolean;
  beginSelect: () => void;
}

const removeLinksFromHTML = (html: string) => {
  const regex = /<a[^>]*>(.*?)<\/a>/g;
  return html.replace(regex, "$1");
};

const getUrlsFromString = (str: string) => {
  const regex = /https?:\/\/[^\s<\n]+/g;
  const urls = str.match(regex);
  return urls;
};

const formatHTMLWithTags = (html: string) => {
  let a = removeLinksFromHTML(html);
  const urls = getUrlsFromString(a);
  console.log(urls);

  if (urls) {
    urls.forEach((url) => {
      a = a.split(url).join(`<a href="${url}" target="_blank">${url}</a>`);
    });
  } else {
    return html;
  }

  return a;
};

const Contents = ({ page, connection, beginSelect }: ContentsProps) => {
  const [editableBookContent, setEditableBookContent] = usePageContent(
    page,
    connection
  );

  const contentEditableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentEditableRef.current) {
      contentEditableRef.current.innerHTML = editableBookContent;
    }
  }, []);

  const handleContentEditableInput = () => {
    const contentEditable = contentEditableRef.current;
    if (!contentEditable) return;

    // Save the caret position
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    const caretOffset = range ? range.startOffset : null;

    const content = contentEditable.innerHTML ?? "";
    const formattedContent = formatHTMLWithTags(content);

    if (formattedContent !== content) {
      contentEditable.innerHTML = formattedContent;

      // Restore the caret position
      if (caretOffset !== null && selection) {
        const newRange = document.createRange();
        newRange.setStart(contentEditable.firstChild || contentEditable, caretOffset);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }
    }

    setEditableBookContent(formattedContent);
  };

  return (
    <Box
      sx={styles.container}
      _focus={styles.focus}
      onClick={(e) => {
        if ((e.target as HTMLElement).tagName === "A") {
          const url = (e.target as HTMLElement).getAttribute("href");
          if (!url) return;
          window.open(url, "_blank");
        }
      }}
      ref={contentEditableRef}
      contentEditable
      onInput={handleContentEditableInput}
      onMouseUp={beginSelect}
    />
  );
};

export default Contents;

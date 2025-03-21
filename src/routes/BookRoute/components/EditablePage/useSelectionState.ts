import { useState } from "react";

const useSelectionState = () => {

    const [selectedRange, setSelectedRange] = useState<Range>();
    const [selectionRect, setSelectionRect] = useState<DOMRect>();
    const [selectedText, setSelectedText] = useState<string>();
    const [selection, setSelection] = useState<Selection>();

    const unSelect = () => {
        setSelectedRange(undefined);
        setSelectionRect(undefined);
        setSelectedText(undefined);
        setSelection(undefined);
    };

    const beginSelect = () => {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0 && selection.toString().length > 0) {
            setSelectedText(selection.toString());
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            setSelection(selection);
            setSelectionRect(rect);
            setSelectedRange(range);
        }
    };

    const replaceSelection = (element: (text: string) => HTMLElement) => {
        (selectedRange as Range).deleteContents();
        (selectedRange as Range).insertNode(element(selectedText as string));
        (selection as Selection).removeAllRanges();
        unSelect();
    };

    return {
        unSelect,
        beginSelect,
        replaceSelection,
        selectedCoords: selectionRect ? {
            top: selectionRect.top,
            left: selectionRect.left,
        } : null
    };
};

export default useSelectionState;
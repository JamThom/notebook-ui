import { Page } from "@/types/api";
import { StyledPageNavItem } from "./PageNavItem.styles";

type PageNavItemProps = {
    page: Page;
    isActive: boolean;
    onClick: () => void;
};

const PageNavItem = ({ page, isActive, onClick }: PageNavItemProps) => {
    return (
        <StyledPageNavItem
            onClick={onClick}
            variant={isActive ? "true" : "false"}
        >
            {page.content}
        </StyledPageNavItem>
    );
};

export default PageNavItem;
import { Page } from "@/types/api";
import { Box } from "@chakra-ui/react";

type PageNavItemProps = {
    page: Page;
    isActive: boolean;
    onClick: () => void;
}

const PageNavItem = ({ page, isActive, onClick }: PageNavItemProps) => {
    return (
        <Box
            onClick={onClick}
            style={{
                cursor: "pointer",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: isActive ? "#f0f0f0" : "white",
            }}
        >
            {page.content}
        </Box>
    )
}

export default PageNavItem;
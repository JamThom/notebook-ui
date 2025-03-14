import { Page } from "../../../../types/api";
import { VStack } from "@chakra-ui/react"
import PageNavItem from "./PageNavItem/PageNavItem";

type PagesNavbarProps = {
    pages: Page[];
    activePage: Page | null;
    setActivePage: (page: Page) => void;
}

const PagesNavbar = ({ pages, activePage, setActivePage }: PagesNavbarProps) => {
    return (
        <VStack>
            {pages.map((page) => (
                <PageNavItem
                    key={page.id}
                    page={page}
                    isActive={activePage?.id === page.id}
                    onClick={() => setActivePage(page)} />
            ))}
        </VStack>
    )
}

export default PagesNavbar;
import { Button } from "@chakra-ui/react";
import { styled } from "@chakra-ui/react";

export const StyledPageNavItem = styled(Button, {
    baseStyle: {
        cursor: "pointer",
        padding: "10px",
        borderRadius: "5px",
    },
    variants: {
        isActive: {
            true: {
                backgroundColor: "#f0f0f0",
            },
            false: {
                backgroundColor: "white",
            },
        },
    },
    defaultProps: {
        variant: "false", // Default to inactive
    },
});

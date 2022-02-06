import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    ${normalize()};

    *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${colors.main.primary.dark};
        color: ${colors.main.light};
        margin: 0;

        a {
        text-decoration: none;
        color: inherit;
        a:hover {
            cursor: pointer;
        }
    }

        button {
            outline: none;
            border: none;
            
        button:hover {
            cursor: pointer;
        }
        }

        input, select {
            border: none;
            
            &:focus {
                outline: none;
            }
        }
    }
`;

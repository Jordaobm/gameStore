import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
    }

    textarea:focus, input:focus, select:focus, button:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

`;
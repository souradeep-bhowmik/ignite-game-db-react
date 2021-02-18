import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:    0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width:  0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:   darkgrey;
        }
    }
    body{
        font-family:    'Rubik', sans-serif;
        width: 100%;
    }
    h2{
        // font-size:   3rem;
        font-family:    'Montserrat' sans-serif;
        font-weight:    lighter;
        color:          #412525;
        text-align:     center;
    }
    h3{
        font-size:  1.3rem;
        padding:    1.5rem;
        color:      #3a4042;
    }
    p{
        font-size:      1.2rem;
        line-height:    200%;
        color:          #696969
    }
`;

export default GlobalStyles;

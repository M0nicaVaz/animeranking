import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
    }



    :focus:not(:focus-visible) {
        outline: none;
        box-shadow: 0 0 0;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.bg_dark};
        color: ${({ theme }) => theme.colors.primary};
    

        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
    }

    ::selection {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.bg_dark}

    }

    ::-webkit-scrollbar {
        width: 4px;
     
    }

    ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 10px;
    }

    img, svg {
        pointer-events: none;
    }


    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text_ultralight};
    }

    ul{
        list-style: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    input:focus{
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent_md};
    }

`;

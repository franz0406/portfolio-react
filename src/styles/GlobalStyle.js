import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,*::before,*::after,h1,h2,h3,h4,h5,h6{
        margin: 0; padding: 0;
    }
    h1,h2,h3,h4,h5,h6{
        display: inline-block;
    }
    .noto {
        font-family: 'Noto Sans KR', sans-serif;
    }
    body{
        margin: 0; padding: 0;
        overflow-x: hidden;
        font-family: 'Source Sans Pro',sans-serif;
    }

    html::-webkit-scrollbar {
        width: 10px;
    }
    html::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 5px;
        background-clip: padding-box;
        border:2px solid transparent;
    }
    html::-webkit-scrollbar-track {
        background-color: #000;
    }

`

export default GlobalStyle;
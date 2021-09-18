import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #121212;
    color: #333333;
    font-size: 16px;
    margin: 0;
  }

  :root {
    --bg: #121212;
    --white: #ffffff;
    --aboveBg: #282828;
    --primary: #bb86fc;
    --error: #cf6679;
    --success: #4caf50;
  }
`

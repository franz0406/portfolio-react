# 리액트 포트폴리오 클론 코딩

### styled-component - ThemeProvider 사용하기  

1. styled-components에서 ThemeProvider를 import한다.  
```javascript
import { ThemeProvider } from "tyled-components";
```
2. `<ThemeProvider>` 컴포넌트를 가장 상위 컴포넌트로  
```javascript
function App() {
     return <>
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    </>    
}
```
3. `Themes.js` 파일을 만든후 테마를 작성할 객체를 만든다.
```javascript
// 다크모드를 위한 테마.
export const lightTheme = {    
    body:"#FCF6F4",
    text:"#000000",
    fontFamily:"'Source Sans Pro', sans-serif",
    bodyRgba : "252, 246, 244",
    textRgba:"0,0,0",
}
export const darkTheme = {    
    body:"#000000",
    text:"#FCF6F4",
    fontFamily:"'Source Sans Pro', sans-serif",
    textRgba : "252, 246, 244",
    bodyRgba:"0,0,0",
}
```
4. 외부파일로 만들었으니 `import` 하고 위에서 생성한 테마 객체를 `<ThemeProvider>`의 `props`로 넣어준다.
```javascript
import { lightTheme } from "./components/Themes"
function App() {
     return <>
        <ThemeProvider theme={ lightTheme }>
            <Home />
        </ThemeProvider>
    </>    
}
```
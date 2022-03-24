# 리액트 포트폴리오 클론 코딩

## styled-component - ThemeProvider 사용하기  

1. styled-components에서 ThemeProvider를 import한다.  
```javascript
import { ThemeProvider } from "styled-components";
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
5. `<ThemeProvider>`로 감싸진 자식 `Component`들은 `<ThemeProvider>`로 전달받은 theme를 props로 전달받아서 사용이 가능.
```javascript
const HomePage = styled.div`
    background: ${ props => props.theme.body};
                     or
    background: ${({theme}) => theme.body};
`
```
---



## styled-components 에서 animation( keyframe ) 사용하기.
1. `styled-components - keyframes`연결
```javascript
import styled, { keyframes } from 'styled-components';
```
2. keyframes 선언
```javascript
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
```
3. keyframes 사용
```javascript
const Component = styled.div`
    animation: ${rotate} 3s linear infinite;
`
```
---



## styled-components 에서 react-router { NavLink("a" tag) } 연결하기.
1. `NavLink`를 연결할 컴포넌트를 만든다.
```javascript
const Main = () => {
    return (
        <Home>
            <Component>
                Contact me..
            </Component>
        </Home>
    );
};
```
2. `react-router-dom` 그리고 `styled-components`연결
```javascript
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Component = styled(NavLink)`
    font-size: 2rem;
    color:#000;
    text-decoration: none;
`
```
3. 컴포넌트 속성으로 `to={{pathname}}`으로 링크연결 ( href속성으로 컴파일됨. )
```javascript
const Main = () => {
    return (
        <Home>
            <Component to={{pathname:"mailto:url...."}} target="_blank">
                Contact me..
            </Component>
        </Home>
    );
};
```
---
# Framer-motion 기초 사용법.
1. Framer-motion Import
```javascript
import { motion } from 'framer-motion';
```
2. component에 모션 적용.
```javascript
// component에 직접 적용
const Home = ()=> {
    return (
        <motion.Component />        
    )
}
// styled-component에 적용
const Component = styled(motion.div)``
const Home = ()=> {
    return (
        <Component />        
    )
}
```
---
## Framer-motion variants 사용
1. 사용할 애니메이션 객체 선언.
```javascript
const scaleMotion = {
    scaleUp: { scale: 1.2 },
    scaleDown: { scale: 0.8 },
};
```
2. component 에 `vatiants` 속성의 값으로 전달
```javascript
const Home = ()=> {
    return (
        <Component>
            <motion.span
                whileHover="scaleUP"
                whileTap="scaleDown"
                variants={scaleMotion}>Hello
            </motion.span>
            <motion.span
                whileHover="scaleUP"
                whileTap="scaleDown"
                variants={scaleMotion}>World
            </motion.span>
        <Component/>        
    )
};
```
---
### 빈 배열을 만들고 map() 을 활용 값 넣기
```javascript
const array = [...Array(20)]; // 인자로 전달한 수 만큼 undefined 의 값이 배열에 들어감.
array.map( arr => { return <tag>...</tag> })
```
---
## React에서 DOM 다루기 useRef() 기본 사용법 
1. ref 선언
```javascript
const ref = useRef(null);
```
2. 접근하고 싶은 태그에 ref속성 넣기.
```javascript
<Component ref={ref}/>
```
3. DOM 다루기 current는 접근한 태그를 가르킨다.
```javascript
const handle = ()=> { ref.current.style.color = 'black'; }
```
---
## Particles-js
1. config 파일 만들기  

`[Particle js](https://vincentgarreau.com/particles.js/) 사이트에 접속해서 스타일 커스터마이징후 config(json)파일 다운  `


2. particles-js 설치후 컴포넌트 만들기
```javascript
import Particles from 'react-particles-js';
const Particle = () => {
    return (
        <Container>
            <Particles />
        </Container>
    );
    // 크기와 높이를 지정하기 위해 부모 엘리먼트를 만들자.
};
```
3. 다운받은 config(json) 파일 가져오기
```javascript
import particlesConfig from 'path/particlesjs-config.json';
```
4. 컴포넌트 속성으로 params 에 전달
```javascript
import particlesConfig from 'path/particlesjs-config.json';
const Particle = () => {
    return (
        <Container>
            <Particles params={particlesConfig}/>
        </Container>
    );
};
```


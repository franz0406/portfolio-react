import { Route, Switch } from "react-router-dom"

// 스타일
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/Themes"
import GlobalStyle from "./styles/GlobalStyle"

// 컴포넌트
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';

function App() {
  return <>

    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/blog" component={BlogPage}/>
        <Route exact path="/work" component={WorkPage}/>
        <Route exact path="/skills" component={MySkillsPage}/>
      </Switch>
    </ThemeProvider>

  </>
    
}

export default App


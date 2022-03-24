import { Route, Switch } from "react-router-dom"

// 스타일
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/Themes"
import GlobalStyle from "./styles/GlobalStyle"

// 컴포넌트
import Main from './components/Main';
import WorkPage from './components/WorkPage';
import PortfolioPage from './components/PortfolioPage';
import MySkillsPage from './components/MySkillsPage';

function App() {
  return <>

    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/work" component={WorkPage}/>
        <Route exact path="/portfolio" component={PortfolioPage}/>
        <Route exact path="/skills" component={MySkillsPage}/>
      </Switch>
    </ThemeProvider>

  </>
    
}

export default App


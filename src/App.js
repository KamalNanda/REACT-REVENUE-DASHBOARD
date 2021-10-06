import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Container>
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <MainContent />
        </Route>
        <Route path="/projects">
          <h1>PROJECTS</h1>
        </Route>
        <Route path="/invoices">
          <h1>INVOICES</h1>
        </Route>
        <Route path="/reports">
          <h1>REPORTS</h1>
        </Route>
      </Switch>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;

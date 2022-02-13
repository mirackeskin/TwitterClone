import './App.css';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Feed from './components/Feed';

function App() {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Content></Content>
      <Feed></Feed>
    </Container>
  );
}

export default App;

import { Container } from '@material-ui/core';
import Header from '../components/common/Header';
import FacebookPosts from '../components/FacebookPosts';

function App() {
  return (
    <div className="app">
      <Header />
      <Container maxWidth="md">
        <FacebookPosts />
      </Container>
    </div>
  );
}

export default App;

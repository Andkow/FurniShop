import { Container } from "react-bootstrap";
import Navheader from "./components/Navheader";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navheader />
      <main className="py-4">
        <Container>
          <h1>Welcome to NiceShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

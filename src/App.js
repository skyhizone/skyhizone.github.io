import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import BodyEffect from "./components/BodyEffect";
import Footer from "./components/Footer";

function App() {
  return (

    <>

      <BodyEffect />
      <Navbar />
      <Body />
      <Footer />

    </>
  );
}

export default App;

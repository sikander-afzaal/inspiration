import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Hem from "./Pages/Hem";
import Kontkat from "./Pages/Kontkat";
import Projekt from "./Pages/Projekt";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Hem />} />
          <Route path="/kontakt" element={<Kontkat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

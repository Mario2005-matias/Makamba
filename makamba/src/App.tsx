import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "../src/pages/Sobre";
import Servicos from "../src/pages/Servicos";
import Contacto from "../src/pages/Contacto";
import Header from "../src/components/Header";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

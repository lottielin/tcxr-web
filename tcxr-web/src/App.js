import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";

function App() {
  return (
    <div className="App">
      <p>TCXR Web Prototype</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";

function App() {
  return (
    <div className="App">
      <h1>TCXR Web Prototype</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

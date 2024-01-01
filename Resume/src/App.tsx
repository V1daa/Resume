import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/app.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

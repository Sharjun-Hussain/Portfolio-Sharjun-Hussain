import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Portfolio-Sharjun-Hussain/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

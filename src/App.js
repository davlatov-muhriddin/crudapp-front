import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import AddContent from "./pages/AddContent";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddContent />} />
      </Routes>
    </>
  );
}

export default App;

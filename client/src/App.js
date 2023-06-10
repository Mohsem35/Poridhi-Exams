import { BrowserRouter, Routes, Route } from "react-router-dom";        // using react router dom for post resquest
import Add from "./pages/Add";
import Books from "./pages/Books";                // source
import Update from "./pages/Update";
import "./style.css"


// add rounting path and calling Books components
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />            
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

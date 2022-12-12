import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "../pages";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<P.PriceScanner />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

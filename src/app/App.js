import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "../pages";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route index element={<P.PriceScanner />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

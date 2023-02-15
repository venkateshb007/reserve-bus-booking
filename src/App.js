import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Bus from "./pages/bus/Bus";
import BusSeat from "./pages/busSeat/BusSeat";

import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/bus" element={<Bus/>}></Route>
      <Route path="/bus/:id" element={<BusSeat/>}></Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;

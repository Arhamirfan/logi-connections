import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import RoutePaths from "./Constants/paths";
function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePaths.home} element={<Home />} />
        <Route path={RoutePaths.about} element={<About />} />
      </Routes>
    </>
  );
}

export default App;

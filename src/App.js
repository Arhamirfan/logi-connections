import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import { aboutpath, homepath } from "./Constants/paths";
function App() {
  return (
    <>
      <Routes>
        <Route path={homepath} element={<Home />} />
        <Route path={aboutpath} element={<About />} />
      </Routes>
    </>
  );
}

export default App;

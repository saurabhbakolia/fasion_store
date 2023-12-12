import './App.css';
import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {LandingPage} from "./containers/LandingPage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<MainPage/>}>
                <Route path={"/home"}  element={<LandingPage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

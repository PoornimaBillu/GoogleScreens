import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Spin from './Components/Spin';
import Popups from './Components/Popups';
import Final from './Components/Final';
import SFinal from './Components/SFinal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fast from "./Components/Fast"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/fast" element={<Fast />}></Route>
        </Routes>
        </BrowserRouter>
  {/* <BrowserRouter><Spin /></BrowserRouter> */}
      {/* <Spin /> */}
      {/* <Popups /> */}
     {/* <Final /> */}
     {/* <SFinal /> */}
    </div>
  );
}

export default App;

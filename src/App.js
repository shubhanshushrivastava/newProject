import './App.css';
import HomeNew from './HomeNew';

import HomePage from './pages/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
          <BrowserRouter>
     <Routes>
     <Route path="/" element={<HomeNew/>} />
      <Route path="/home" element={<HomePage/>} />
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;

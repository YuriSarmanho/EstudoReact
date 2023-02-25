import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./Pages/Main";
import { Login } from "./Pages/Login";
import { Navbar } from "./components/navbar";
import "./App.css";

function App() {
  return <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  </div>;
}

export default App;

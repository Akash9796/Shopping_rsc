// import './App.css';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Cart from "./Component/Cart";
import Home from "./Component/Home";

function App() {
  return (
    <Router>
      <Main className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;

const Main = styled.div`
  background: #7fb7be;
`;

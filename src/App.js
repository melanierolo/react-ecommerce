import "./App.css";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CardWidget";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetailsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Logo />
          <NavBar />
          <CartWidget />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer message={"Productos"} />}
            />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer message={"Productos"} />}
            />
            <Route path="/item/:idItem" element={<ItemDetailsContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

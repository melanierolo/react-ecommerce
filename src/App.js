import "./App.css";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CardWidget";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <NavBar />
        <CartWidget />
      </header>
      <main>
        <ItemListContainer message={"Bienvenidos a mi página 🙂 "} />
      </main>
    </div>
  );
}

export default App;

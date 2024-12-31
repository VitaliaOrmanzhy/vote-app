import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="app">
      <Header text={"Hello"} />
      <div className="content">
        <Aside />
        <Content />
      </div>
    </div>
  );
}

export default App;

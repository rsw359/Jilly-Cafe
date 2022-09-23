import "./App.css";
import mountains from "./assets/mountains.png";
// import Example from "./components/side-menu/Side-Menu.component";

function App() {
  return (
    <div className="App">
      <div className="box">
        <div id="logo">Jily</div>
        <div className="mtn-box">
          <img src={mountains} alt="mtns" />
        </div>
      </div>
    </div>
  );
}

export default App;

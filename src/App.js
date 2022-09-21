import "./App.css";
import mountains from "./assets/mountains.png";

function App() {
  return (
    <div className="App">
      <div class="box">
        <div class="hid-box">
          <div id="logo">Jilly</div>
          <img src={mountains} alt="mtns" />
        </div>
      </div>
    </div>
  );
}

export default App;

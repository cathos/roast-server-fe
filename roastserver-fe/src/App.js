// import logo from "./logo.svg";
import "./App.css";
import TempsAndTimes from "./components/TempsAndTimes";
const roastData = 1;

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <TempsAndTimes roaster-data={roastData}></TempsAndTimes>
      </main>
    </div>
  );
}

export default App;

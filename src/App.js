import Stopwatch from "./components/Stopwatch/Stopwatch.component";
import TimerInput from "./components/TimerInput/TimerInput.component";
import Picker from "./components/Picker/Picker.component";
import Users from "./components/Users/Users.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>浪Live Lottery App Demo</h1>
        <p>Benjamin Cai</p>
      </div>
      <TimerInput />
      {<Stopwatch />}
      <Users />
      <Picker />
    </div>
  );
}

export default App;

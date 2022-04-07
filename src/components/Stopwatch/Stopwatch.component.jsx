import { useState, useRef } from "react";
import "./Stopwatch.styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setPick, setWinner } from "../Picker/state/picker.actions";
import { formatTime } from "../../helpers/formatStopwatchTime";

const Stopwatch = () => {
  const dispatch = useDispatch();
  const hoursStored = useSelector((state) => state.timerInput.hours);
  const minsStored = useSelector((state) => state.timerInput.mins);
  const secsStored = useSelector((state) => state.timerInput.secs);

  const [started, setStarted] = useState(false);

  const timeInMs = () => {
    const hours = hoursStored * 60 * 60 * 1000;
    const mins = minsStored * 60 * 1000;
    const seconds = secsStored * 1000;
    const ms = hours + mins + seconds;
    return ms;
  };

  const timeoutTime = timeInMs();
  const [count, setCount] = useState(timeoutTime);

  const interval = useRef();
  const timeout = useRef();

  const createTimeout = () => {
    return setTimeout(() => {
      dispatch(setPick(true));
      setStarted(false);
      console.log("Timeout end.");
      clearInterval(interval.current);
    }, timeoutTime);
  };

  const createInterval = (step, callback) => {
    return setInterval(() => {
      callback();
    }, step);
  };

  const intervalCallback = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleStart = () => {
    if (started === true) return;
    dispatch(setWinner(""));
    setStarted(true);
    setCount(timeoutTime / 1000);
    const intervalStep = 1000;
    interval.current = createInterval(intervalStep, intervalCallback);
    timeout.current = createTimeout();
  };

  const handleStop = () => {
    dispatch(setWinner(""));
    setStarted(false);
    setCount(0);
    clearInterval(interval.current);
    clearTimeout(timeout.current);
  };

  return (
    <div className="Stopwatch">
      <div className="stopwatch--title">
        <p className="instruction-text">
          Step 2: Press Start to begin countdown. Pressing Reset will stop and reset the countdown
          and no winner to be drawn.
        </p>
      </div>
      <div className="stopwatch--buttons">
        <button className="stopwatch--start" onClick={handleStart}>
          Start
        </button>
        <button className="stopwatch--stop" onClick={handleStop}>
          Reset
        </button>
      </div>

      <div className={`stopwatch--count ${started ? "stopwatch--active" : ""}`}>
        {formatTime(count * 1000)}
      </div>
    </div>
  );
};

export default Stopwatch;

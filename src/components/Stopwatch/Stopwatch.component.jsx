import "./Stopwatch.styles.css";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPick, setWinner } from "../Picker/state/picker.actions";
import StopwatchClock from "../StopwatchClock/StopwatchClock.component";
import { checkValidTimeout } from "../../helpers/checkValidTimeout";

const Stopwatch = () => {
  const dispatch = useDispatch();
  const hoursStored = useSelector((state) => state.timerInput.hours);
  const minsStored = useSelector((state) => state.timerInput.mins);
  const secsStored = useSelector((state) => state.timerInput.secs);

  const [started, setStarted] = useState(false);
  const [timeoutTime, setTimeoutTime] = useState(0);
  const [count, setCount] = useState(timeoutTime);

  useEffect(() => {
    const timeInMs = () => {
      const hours = Number(hoursStored) * 60 * 60 * 1000;
      const mins = Number(minsStored) * 60 * 1000;
      const seconds = Number(secsStored) * 1000;
      const ms = hours + mins + seconds;
      return ms;
    };
    setTimeoutTime(timeInMs());
  }, [hoursStored, minsStored, secsStored]);

  const interval = useRef();
  const timeout = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

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
    setCount((prevCount) => prevCount - 1000);
  };

  const [isTimerError, setIsTimerError] = useState(false);

  const handleStart = () => {
    if (timeoutTime === 0) {
      setIsTimerError(true);
      setErrorMessage("Countdown time cannot be 0. Please select a time for the countdown");
      return;
    }
    if (!checkValidTimeout(timeoutTime)) {
      setIsTimerError(true);
      setErrorMessage("Countdown time is too long. Valid times range up to 2147483 seconds");
      return;
    }
    setIsTimerError(false);
    setErrorMessage("");
    if (started === true) return;
    dispatch(setWinner(""));
    setStarted(true);
    setCount(timeoutTime);
    const intervalStep = 1000;
    interval.current = createInterval(intervalStep, intervalCallback);
    timeout.current = createTimeout();
  };

  const handleReset = () => {
    setErrorMessage("");
    setIsTimerError(false);
    dispatch(setWinner(""));
    setStarted(false);
    setCount(0);
    clearInterval(interval.current);
    clearTimeout(timeout.current);
  };

  const makeCountdown = () => {
    return <StopwatchClock ms={count}></StopwatchClock>;
  };

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="Stopwatch">
      <div className="stopwatch--title">
        <p className="instruction-text">
          Step 2: Press Start to begin countdown. Pressing Reset will interrupt, stop and reset the
          countdown and no winner to be drawn.
        </p>
      </div>
      <div className="stopwatch--buttons">
        <button
          className={`stopwatch--start ${started === true ? "stopwatch--start--active" : ""}`}
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className={`stopwatch--reset ${started === true ? "stopwatch--reset--active" : ""}`}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className={`stopwatch--count ${started ? "stopwatch--active" : ""}`}>
        {makeCountdown()}
      </div>
      {isTimerError ? <div className="time-error">{errorMessage}</div> : ""}
    </div>
  );
};

export default Stopwatch;

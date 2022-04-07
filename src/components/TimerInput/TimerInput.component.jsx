import "./TimerInput.styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateHours, updateMins, updateSecs } from "./state/timerInput.actions";
import { twoDigits } from "../../helpers/formatTimerInputNums";

const TimerInput = () => {
  const dispatch = useDispatch();
  const [hours, setHours] = useState(twoDigits(0));
  const [mins, setMins] = useState(twoDigits(0));
  const [secs, setSecs] = useState(twoDigits(0));

  const handleHoursChange = (e) => {
    const val = Number(e.target.value);
    setHours(twoDigits(val));
    dispatch(updateHours(val));
  };

  const handleMinsChange = (e) => {
    const val = Number(e.target.value);
    setMins(twoDigits(val));
    dispatch(updateMins(val));
  };

  const handleSecsChange = (e) => {
    const val = Number(e.target.value);
    setSecs(twoDigits(val));
    dispatch(updateSecs(val));
  };

  const minHoursMinsSecs = 0;
  const maxMinsSecs = 60;

  return (
    <div className="TimerInput">
      <p className="instruction-text">
        Step 1: Choose hours, minutes, and seconds till lottery draw.
      </p>
      <form className="timer-form">
        <label>Hours</label>
        <input
          className="TimerInput--input"
          type="number"
          value={hours}
          onChange={handleHoursChange}
          min={minHoursMinsSecs}
          step="1"
        />
        <label>Minutes</label>
        <input
          className="TimerInput--input"
          type="number"
          value={mins}
          onChange={handleMinsChange}
          min={minHoursMinsSecs}
          max={maxMinsSecs}
          step="1"
        />
        <label>Seconds</label>
        <input
          className="TimerInput--input"
          type="number"
          value={secs}
          onChange={handleSecsChange}
          min={minHoursMinsSecs}
          max={maxMinsSecs}
          step="1"
        />
      </form>
    </div>
  );
};

export default TimerInput;

import "./TimerInput.styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateHours, updateMins, updateSecs } from "./state/timerInput.actions";
import { twoDigits } from "../../helpers/formatTimerInputNums";
import { onFocusHandler, onBlurHandler } from "../../helpers/timerEventHandlers.js";

const TimerInput = () => {
  const dispatch = useDispatch();
  const [hours, setHours] = useState(twoDigits("00"));
  const [mins, setMins] = useState(twoDigits("00"));
  const [secs, setSecs] = useState("00");

  const handleHoursChange = (e) => {
    const formattedVal = twoDigits(e.target.value);
    setHours(formattedVal);
    dispatch(updateHours(formattedVal));
  };

  const handleMinsChange = (e) => {
    const formattedVal = twoDigits(e.target.value);
    setMins(formattedVal);
    dispatch(updateMins(formattedVal));
  };

  const handleSecsChange = (e) => {
    const formattedVal = twoDigits(e.target.value);
    setSecs(formattedVal);
    dispatch(updateSecs(formattedVal));
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
          onFocus={() => onFocusHandler(hours, setHours)}
          onBlur={() => onBlurHandler(hours, setHours)}
        />
        <label>Minutes</label>
        <input
          className="TimerInput--input"
          type="number"
          value={mins}
          onChange={handleMinsChange}
          min={minHoursMinsSecs}
          // max={maxMinsSecs}
          step="1"
          onFocus={() => onFocusHandler(mins, setMins)}
          onBlur={() => onBlurHandler(mins, setMins)}
        />
        <label>Seconds</label>
        <input
          className="TimerInput--input"
          type="number"
          value={secs}
          onChange={handleSecsChange}
          min={minHoursMinsSecs}
          // max={maxMinsSecs}
          step="1"
          onFocus={() => onFocusHandler(secs, setSecs)}
          onBlur={() => onBlurHandler(secs, setSecs)}
        />
      </form>
    </div>
  );
};

export default TimerInput;

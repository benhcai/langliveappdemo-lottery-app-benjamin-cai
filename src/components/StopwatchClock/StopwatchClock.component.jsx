import "./StopwatchClock.style.css";
import { twoDigits } from "../../helpers/formatTimerInputNums";

const StopwatchClock = ({ ms }) => {
  const msInHour = 1 * 60 * 60 * 1000;
  const hours = Math.trunc(ms / msInHour);
  ms = ms % msInHour;
  const msInMin = 1 * 60 * 1000;
  const mins = Math.trunc(ms / msInMin);
  ms = ms % msInMin;
  const msInSec = 1000;
  const secs = Math.trunc(ms / msInSec);

  return (
    <div className="StopwatchClock">
      <div className="StopwatchClock--hours">{twoDigits(hours)}</div>
      <div className="StopwatchClock--divider">:</div>
      <div className="StopwatchClock--mins">{twoDigits(mins)}</div>
      <div className="StopwatchClock--divider">:</div>
      <div className="StopwatchClock--secs">{twoDigits(secs)}</div>
    </div>
  );
};

export default StopwatchClock;

import "./Picker.styles.css";
import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPick, setWinner } from "./state/picker.actions";
import UserCard from "../UserCard/UserCard.component";
import { getRandomId } from "../../helpers/getRandomId";

const Picker = () => {
  const usersStored = useSelector((state) => state.users.users);
  const pickStored = useSelector((state) => state.picker.pick);
  const winnerStored = useSelector((state) => state.picker.winner);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pickStored === false) return;
    const winnerId = getRandomId(usersStored);
    const winner = usersStored[winnerId];
    dispatch(setPick(false));
    dispatch(setWinner(winner.name));
  }, [pickStored, dispatch, usersStored]);

  const generateWinnerResult = () => {
    return (
      <Fragment>
        <div className="winner-title">Congratulations to:</div>
        <UserCard />
      </Fragment>
    );
  };
  return (
    <div className="Picker">
      {winnerStored !== "" ? generateWinnerResult() : "Press Start to begin"}
    </div>
  );
};

export default Picker;

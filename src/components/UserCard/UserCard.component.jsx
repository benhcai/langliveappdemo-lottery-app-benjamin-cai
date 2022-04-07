import "./UserCard.styles.css";
import defaultAvatar from "../../resources/defaultAvatar.jpg";
import { useSelector } from "react-redux";

const UserCard = () => {
  const winnerStored = useSelector((state) => state.picker.winner);

  return (
    <div className="UserCard">
      <img className="avatar" src={defaultAvatar} alt="profile-pic" />
      <div className="winner-user">{winnerStored}</div>
    </div>
  );
};

export default UserCard;

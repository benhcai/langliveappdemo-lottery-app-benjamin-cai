import { useEffect } from "react";
import "./Users.styles.css";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "./state/users.actions";

const Users = () => {
  const usersStored = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const generateUsers = (limit) => {
    const users = [];
    for (let i = 0; i < limit; i++) {
      users.push({ id: i, name: `User ${i}` });
    }
    return users;
  };

  useEffect(() => {
    const users = generateUsers(30);
    dispatch(updateUsers(users));
  }, [dispatch]);

  const makeUsers = () => {
    return usersStored.map((user) => {
      return <div key={user.id}>{user.name}</div>;
    });
  };

  return (
    <div className="Users">
      <div className="users-contestants">Contestants ({usersStored.length}):</div>
      <div className="users-list-container">{makeUsers()}</div>
    </div>
  );
};

export default Users;

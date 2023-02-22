import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

const Profile = (props) => {
  const { username } = useContext(AppContext);

  return (
    <div>
      This is the Profile page and the user is {username}
      <ChangeProfile />
    </div>
  );
};

export default Profile;

import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);

  const [newUsername, setnewUsername] = useState("");

  return (
    <div>
      <input
        onChange={(event) => {
          setnewUsername(event.target.value);
        }}
      />
      <button onClick={() => setUsername(newUsername)}>Change UserName</button>
    </div>
  );
};

export default ChangeProfile;

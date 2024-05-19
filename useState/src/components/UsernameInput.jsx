// src/components/UsernameInput.jsx

import { useState } from "react";

function UsernameInput() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          <p>{setUsername(e.target.value)}</p>
        }}
      />
      <p>Username: {username.toLowerCase()}</p>
    </div>
  );
}

export default UsernameInput;

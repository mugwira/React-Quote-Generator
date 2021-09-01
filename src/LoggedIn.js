import React, { useState } from "react";

function LoggedIn() {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleClick = () => {
    setLoggedIn(loggedIn);
  };

  return (
    <div className="text-center">
      <button onClick={handleClick} className="bg-blue-300 px-4 py-2 mt-16">
        {loggedIn ? <p>Log Out</p> : <p>Log in</p>}
      </button>
    </div>
  );
}

export default LoggedIn;

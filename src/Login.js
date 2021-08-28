import React, { useState } from "react";

function Login() {
  const [loggedin, setLoggedin] = useState(true);

  return (
    <div className="text-center bg-indigo-200 w-1/4 mx-auto">
      {loggedin ? <h2>Welcome Claire</h2> : <h4>You are logged out</h4>}
    </div>
  );
}

export default Login;

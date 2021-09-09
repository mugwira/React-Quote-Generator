import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function Login() {
  const clientId = "783941750893-edplgf1m3kovimvo01aqdise7md5g57o.apps.googleusercontent.com";

  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const onFailureSuccess = (res) => {};

  const onSignoutSuccess = (res) => {
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };

  return (
    <div className="my-login text-center bg-blue-200 w-1/4 mx-auto h-96 my-16">
      <div className="content p-8">
          <h2 className="mb-8 font-semi-bold text-4xl">Login</h2>
        {showLoginButton ? (
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onLoginSuccess}
            onFailure={onFailureSuccess}
            cookiePolicy={"single_host_origin"}
          />
        ) : null}
        {showLogoutButton ? (
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSignoutSuccess}
          ></GoogleLogout>
        ) : null}
      </div>
    </div>
  );
}

export default Login;

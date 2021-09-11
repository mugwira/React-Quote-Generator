import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function Login() {
  const clientId =
    "783941750893-edplgf1m3kovimvo01aqdise7md5g57o.apps.googleusercontent.com";

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
    <div className="">
      <form className="my-login bg-white my-8 text-center py-8 w-60 md:w-96 rounded-lg mx-auto">
        <h2 className="mb-4 md:mb-8 font-semi-bold text-2xl md:text-4xl">
          Login
        </h2>
        <div className="google-login">
          {showLoginButton ? (
            <GoogleLogin
              className="rounded p-3 w-10/12 border-2 border-black"
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onLoginSuccess}
              onFailure={onFailureSuccess}
              cookiePolicy={"single_host_origin"}
            />
          ) : null}
          {showLogoutButton ? (
            <GoogleLogout
              className="rounded p-3 w-10/12 border-2 border-black"
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          ) : null}
        </div>

        <p className="font-semi-bold text-lg my-4">or</p>
        <div className="manual  space-y-4 flex flex-col items-center">
          <input
            className="p-3 rounded w-10/12 border-2 border-black"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="p-3 rounded w-10/12 border-2 border-black"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="my-button my-4">
          <button className="p-3 rounded-full w-10/12 bg-black text-white bg-black-900">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

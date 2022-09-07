import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOGIN } from "../graphql/user.graphql";

function Login() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { login } = useQuery(LOGIN, {
    variables: {
      email: email,
      password: password,
    },
    onCompleted(data) {
      console.log("Success : ", data);
    },
    onError(error) {
      console.log("Error : ", error);
    },
  });

  const onSubmit = (e) => {
    //e.preventDefault();
    login();
    navigate("/dashboard");
  };

  return (
    <body className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a>
            <b>Login</b>
          </a>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setemail(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8"></div>

                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-linkedin mr-2"></i> Sign in using Linkedin
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google mr-2"></i> Sign in using Google
              </a>
            </div>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>

            <p className="mb-0">
              <Link to="/register" className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;

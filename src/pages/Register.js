import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/user.graphql";
import { Alert } from "react-bootstrap";

function Register() {
  const navigate = useNavigate();

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [address, setaddress] = useState("");
  const [image, setimage] = useState("");

  const [addUser] = useMutation(REGISTER, {
    variables: {
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email,
      birthDate: birthDate,
      address: address,
      image: image,
    },
    onCompleted(data) {
      Alert.alert("success");
      console.log("Success : ", data);
    },
    onError(error) {
      Alert.alert("error");
      console.log("Error : ", error);
    },
  });

  const onSubmit = (e) => {
    //e.preventDefault();
    addUser();
    navigate("/login");
  };

  return (
    <body className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo">
          <a>
            <b>Register</b>
          </a>
        </div>

        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg"> </p>

            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Firstname"
                  name="firstname"
                  onChange={(e) => {
                    setfirstname(e.target.value);
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lastname"
                  name="lastname"
                  onChange={(e) => setlastname(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
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
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="date"
                  className="form-control"
                  name="birthDate"
                  onChange={(e) => setbirthDate(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-calendar"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  name="address"
                  onChange={(e) => setaddress(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-map-marker"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Image"
                  name="image"
                  onChange={(e) => setimage(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-image"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-linkedin mr-2"></i>
                Sign up using Linkedin
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google mr-2"></i>
                Sign up using Google
              </a>
            </div>

            <Link to="/login" className="text-center">
              I already have a membership
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Register;

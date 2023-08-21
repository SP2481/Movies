import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebook from "./Images/facebook.png";
import goggle from "./Images/search.png";
import "./Styling/Login.css";
import { SignInWithFacebook, SignInWithGoogle, auth } from "./firebase";

export default function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errMsg, seterrMsg] = useState("");
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const handleSubmit = () => {
    if (!values.username || !values.email || !values.password) {
      seterrMsg("*Fill all input fields");
      return;
    }
    seterrMsg("");
    setbuttonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setbuttonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.username,
        });
        navigate("/");
      })
      .catch((err) => {
        setbuttonDisabled(false);
        seterrMsg(err.message);
      });
  };

  return (
    <>
      <div class="main-box">
        <div class="box">
          <form className="form">
            <h3 className="heading">Sign up</h3>
            <div className="input-data">
              <label for="name" className="labels">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                required
                className="signin-input"
                onChange={(event) => {
                  setValues({ ...values, username: event.target.value });
                }}
              />

              <label for="Email" className="labels">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                id="Email"
                required
                className="signin-input"
                onChange={(event) => {
                  setValues({ ...values, email: event.target.value });
                }}
              />

              <label for="password" className="labels">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
                className="signin-input"
                onChange={(event) => {
                  setValues({ ...values, password: event.target.value });
                }}
              />
              <b>{errMsg}</b>
              <button
                id="button"
                type="button"
                className="signup-button"
                onClick={handleSubmit}
                disabled={buttonDisabled}
              >
                Sign Up
              </button>
            </div>
            <div class="social">
              <button className="goggle" onClick={SignInWithGoogle}>
                {" "}
                <img src={goggle} alt="goggle" height="18px" />
              </button>

              <button className="facebook" onClick={SignInWithFacebook}>
                <img src={facebook} alt="goggle" height="18px" />
              </button>
            </div>

            <p className="footer">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

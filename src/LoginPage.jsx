import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebook from "./Images/facebook.png";
import goggle from "./Images/search.png";
import "./Styling/Login.css";
import { SignInWithFacebook, SignInWithGoogle, auth } from "./firebase";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errMsg, seterrMsg] = useState("");
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  function handleSubmit() {
    if (!values.email || !values.password) {
      seterrMsg("Fill all Input Fields");
      return;
    }
    seterrMsg("");
    setbuttonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      //this will give me a promise
      .then((res) => {
        setbuttonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setbuttonDisabled(false);
        seterrMsg(err.message);
      });
  }

  return (
    <>
      <div class="main-box">
        <div class="box">
          <form className="form">
            <h3 className="heading">Log in</h3>
            <div className="input-data">
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
                Log in
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
              Need an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

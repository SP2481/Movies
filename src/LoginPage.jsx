import { Link } from "react-router-dom";
import "./Styling/Login.css";
export default function Login() {
  return (
    <>
      <div class="main-box">
        <div class="box">
          <form className="form">
            <h3 className="heading">Log in</h3>

            <label for="Email" className="labels">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              id="Email"
              required
              className="signin-input"
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
            />
            <button id="button" type="button" className="signup-button">
              Log in
            </button>
            <div class="social">
              <button className="goggle">
                {" "}
                <img src="src\Images\search.png" alt="goggle" height="18px" />
              </button>

              <button className="facebook">
                <img src="src\Images\facebook.png" alt="goggle" height="18px" />
              </button>
            </div>
            <p className="footer">
              Need an account? <Link to="">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

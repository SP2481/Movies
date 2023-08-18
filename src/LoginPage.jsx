import "./Styling/Login.css";
export default function Login() {
  return (
    <>
      <div class="main-box">
        <div class="box">
          <form className="form">
            <h3 className="heading">Sign Up</h3>

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
              Sign up
            </button>
            <div class="social">
              <div class="go">
                <img src="src\Images\search.png" alt="goggle" height="18px" />
              </div>
              <div class="fb">
                <img src="src\Images\facebook.png" alt="goggle" height="18px" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

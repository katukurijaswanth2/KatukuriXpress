import "./Login.css";

export const Login = () => {
  return (
    <form className="login-form">
      
      {/* Title */}
      <p className="login-title">
        Sign in to your account
      </p>

      {/* Email */}
      <div className="login-input-container">
        <input
          type="email"
          placeholder="Enter email"
          className="login-input"
        />
      </div>

      {/* Password */}
      <div className="login-input-container">
        <input
          type="password"
          placeholder="Enter password"
          className="login-input"
        />
      </div>

      {/* Button */}
      <button type="submit" className="login-button">
        Sign in
      </button>

      {/* Signup link */}
      <p className="login-signup">
        No account? <span>Sign up</span>
      </p>

    </form>
  );
};
import React, { useState } from "react";
import { API_URL } from "../../data/apiPath";
import { ThreeCircles } from "react-loader-spinner";

const Login = ({ showWelcomeHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Login successful! 🎉");
        setEmail("");
        setPassword("");
        localStorage.setItem("loginToken", data.token);
        showWelcomeHandler();
      }
      const adminId = data.adminId;
      console.log("Checking for AdminId:", adminId);
      const adminResponse = await fetch(
        `${API_URL}/admin/single-admin/${adminId}`
      );
      window.location.reload();
      const adminData = await adminResponse.json();
      if (adminResponse.ok) {
        const adminFirmId = adminData.adminFirmId;
        const adminFirmName = adminData.admin.firm[0].firmName;
        localStorage.setItem("firmId", adminFirmId);
        localStorage.setItem("firmName", adminFirmName);
      }
    } catch (error) {
      alert("Login failed. Please try again. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {loading && (
        <div style={styles.loadingOverlay}>
          <ThreeCircles
            visible={loading}
            height={60}
            width={60}
            color="#FFD700"
            ariaLabel="loading-animation"
          />
          <p style={styles.loadingText}>Logging in... Please wait</p>
        </div>
      )}

      {!loading && (
        <form style={styles.form} onSubmit={loginHandler} autoComplete="off">
          <h2 style={styles.heading}>Admin Login</h2>

          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={styles.input}
          />

          <label style={styles.label}>Password</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={styles.passwordInput}
            />
            <span onClick={handleShowPassword} style={styles.togglePassword}>
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit" style={styles.loginBtn}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",  
    padding: "20px",
    position: "absolute",
    top: "0",
    left: "0",
}
,
  form: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    borderTop: "6px solid #e23744",
    transition: "0.3s ease-in-out",
  },
  heading: {
    color: "#e23744",
    fontSize: "24px",
    marginBottom: "20px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    display: "block",
    textAlign: "left",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "2px solid #ddd",
    borderRadius: "6px",
    fontSize: "16px",
    outline: "none",
    transition: "0.3s",
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  passwordInput: {
    width: "100%",
    padding: "12px",
    border: "2px solid #ddd",
    borderRadius: "6px",
    fontSize: "16px",
    outline: "none",
    transition: "0.3s",
    paddingRight: "40px",
  },
  togglePassword: {
    position: "absolute",
    right: "10px",
    fontSize: "18px",
    cursor: "pointer",
    color: "#999",
    transition: "0.3s",
  },
  loginBtn: {
    width: "100%",
    backgroundColor: "#e23744",
    color: "white",
    fontSize: "18px",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "15px",
    transition: "0.3s",
  },
  loadingOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  loadingText: {
    marginTop: "10px",
    fontSize: "18px",
  },
};

export default Login;

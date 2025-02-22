import React, { useState } from "react";
import { API_URL } from "../../data/apiPath";
import { ThreeCircles } from "react-loader-spinner";

const Register = ({ showLoginHandler }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/vendor/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUsername("");
        setEmail("");
        setPassword("");
        alert("Vendor registered successfully");
        showLoginHandler();
      } else {
        setError(data.error);
        alert("Registration Failed, Contact Admin");
      }
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed");
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
            height={100}
            width={100}
            color="gold"
          />
          <p style={styles.loadingText}>Registering, please wait...</p>
        </div>
      )}
      {!loading && (
        <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <h3 style={styles.heading}>Admin Register</h3>

          <label style={styles.label}>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
          />

          <label style={styles.label}>Password</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Enter your password"
              style={styles.passwordInput}
            />
            <span style={styles.togglePassword} onClick={handleShowPassword}>
              {showPassword ? "👁️" : "🔒"}
            </span>
          </div>

          <button type="submit" style={styles.loginBtn}>
            Register
          </button>
        </form>
      )}
    </div>
  );
};

// Styles
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
  },
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

export default Register;

import React from "react";

const NavBar = ({ showLoginHandler, showRegisterHandler, showLogOut, logOutHandler }) => {
  const firmName = localStorage.getItem("firmName");

  return (
    <div style={styles.navWrapper}>
      <nav style={styles.navSection}>
        <div style={styles.company}>🍅 Tomato</div>
        <div style={styles.firmName}>
          <h4>
            Vendor Name: <span>{firmName || "N/A"}</span>
          </h4>
        </div>
        <div style={styles.userAuth}>
          {!showLogOut ? (
            <>
              <span style={styles.authLink} onClick={showLoginHandler}>
                Login
              </span>
              <span style={styles.authLink} onClick={showRegisterHandler}>
               / Register
              </span>
            </>
          ) : (
            <span onClick={logOutHandler} style={styles.logout}>
              Logout
            </span>
          )}
        </div>
      </nav>
    </div>
  );
};


const styles = {
  navSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    background: "linear-gradient(135deg, rgb(255, 56, 92), rgb(234, 30, 64))",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
    color: "white",
    width: "100%",
    maxWidth: "1650px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  company: {
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  firmName: {
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
    flexGrow: 1,
  },
  userAuth: {
    display: "flex",
    alignItems: "center",
  },
  authLink: {
    cursor: "pointer",
    fontWeight: "bold",
    color: "white",
    padding: "8px 12px",
    transition: "0.3s",
    borderRadius: "5px",
    marginLeft: "10px",
  },
  logout: {
    cursor: "pointer",
    fontWeight: "bold",
    color: "yellow",
    padding: "8px 12px",
    transition: "0.3s",
    borderRadius: "5px",
  },

  // Responsive Design
  "@media (max-width: 768px)": {
    navSection: {
      flexDirection: "column",
      textAlign: "center",
      padding: "10px",
    },
    firmName: {
      fontSize: "16px",
    },
    authLink: {
      fontSize: "14px",
      padding: "6px 10px",
    },
  },
};

export default NavBar;

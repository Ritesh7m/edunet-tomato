import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const TopBar = () => {
  const styles = {
    topBarSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#EF4F5F", 
      padding: "15px 40px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "1650px",
    },
    brandName: {
      color: "white",
      fontSize: "26px",
      fontWeight: "bold",
      textDecoration: "none",
      transition: "0.3s",
    },
    brandNameHover: {
      color: "#FFC107", 
    },
    searchBar: {
      display: "flex",
      alignItems: "center",
      background: "white",
      borderRadius: "25px",
      padding: "5px 15px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    searchInput: {
      border: "none",
      outline: "none",
      padding: "10px",
      fontSize: "16px",
      width: "250px",
      borderRadius: "20px",
    },
    searchBtn: {
      background: "#2D2D2D", 
      border: "none",
      color: "white",
      padding: "10px 14px",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "0.3s",
    },
    searchBtnHover: {
      background: "#1C1C1C",
    },
    userAuth: {
      display: "flex",
      alignItems: "center",
    },
    authLink: {
      display: "flex",
      alignItems: "center",
      color: "white",
      fontSize: "18px",
      textDecoration: "none",
      transition: "0.3s",
    },
    authLinkHover: {
      color: "#FFC107",
    },
    userIcon: {
      marginRight: "8px",
      fontSize: "24px",
    },
  };

  return (
    <header style={styles.topBarSection}>
      {/* Brand Name */}
      <div>
        <Link to="/" style={styles.brandName}>
          Tomato
        </Link>
      </div>

      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for food, restaurants..."
          style={styles.searchInput}
        />
        <button
          style={styles.searchBtn}
          onMouseEnter={(e) => (e.target.style.background = "#1C1C1C")}
          onMouseLeave={(e) => (e.target.style.background = "#2D2D2D")}
        >
          <FaSearch />
        </button>
      </div>

      {/* User Auth */}
      <div style={styles.userAuth}>
        <Link
          to="/login"
          style={styles.authLink}
          onMouseEnter={(e) => (e.target.style.color = "#FFC107")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          <FaUserCircle style={styles.userIcon} /> Login / Sign Up
        </Link>
      </div>
    </header>
  );
};

export default TopBar;

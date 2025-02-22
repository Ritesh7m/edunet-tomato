import React from "react";
import { FaBuilding, FaBox, FaBoxes, FaUser } from "react-icons/fa"; 

const SideBar = ({
  showFirmHandler,
  showProductHandler,
  showAllProductsHandler,
  showFirmTitle,
}) => {
  return (
    <div style={styles.sideBarSection}>
      <h2 style={styles.heading}>Dashboard</h2>
      <ul style={styles.list}>
        {showFirmTitle && (
          <li style={styles.listItem} onClick={showFirmHandler}>
            <FaBuilding style={styles.icon} />Add Vendor
          </li>
        )}
        <li style={styles.listItem} onClick={showProductHandler}>
          <FaBox style={styles.icon} /> Add Product
        </li>
        <li style={styles.listItem} onClick={showAllProductsHandler}>
          <FaBoxes style={styles.icon} /> All Products
        </li>
        <li style={styles.listItem}>
          <FaUser style={styles.icon} /> User Details
        </li>
      </ul>
    </div>
  );
};


const styles = {
  sideBarSection: {
    width: "260px",
    height: "100vh",
    background: "linear-gradient(135deg, #e23744, #ff6f61)", // Smooth gradient
    padding: "20px",
    boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    color: "white",
    transition: "0.3s",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
    paddingBottom: "10px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 20px",
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  listItemHover: {
    background: "rgba(255, 255, 255, 0.4)",
  },
  icon: {
    fontSize: "20px",
  },
};

export default SideBar;

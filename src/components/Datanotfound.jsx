import React, { useEffect, useState } from "react";

const DataNotFound = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component is mounted
    setIsVisible(true);
  }, []);

  const containerStyle = {
    ...styles.container,
    opacity: isVisible ? 1 : 0, // Toggle opacity based on isVisible state
  };

  return (
    <div style={containerStyle}>
      <div style={styles.graphic}>😟</div>
      <p style={styles.message}>Data Not Found</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    transition: "opacity 0.5s ease-in-out", // Use transition for the fade-in effect
  },
  graphic: {
    fontSize: "4rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#555",
  },
};

export default DataNotFound;

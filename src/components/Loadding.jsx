import React from "react";

const Loading = () => {
  return (
    <div style={styles.container}>
      <div className="loader" style={styles.loader}></div>
      <p style={styles.message}>Loading...</p>
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
  },
  loader: {
    width: "50px",
    aspectRatio: "1",
    background: `
      var(--_c) top,
      var(--_c) left,
      var(--_c) right,
      var(--_c) bottom
    `,
    backgroundSize: "12px 12px",
    animation: "l7 1s infinite",
  },
  message: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#555",
    marginTop: "1rem",
  },
};

export default Loading;

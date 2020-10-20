import React from "react";

export const Header: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "40vh",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#333333",
        color: "#FEFEFE",
        padding: " 0 50px 50px",
        fontFamily: "cursive",
      }}
    >
      <h1 style={{ fontSize: "9vh" }}>HN Feed</h1>
      <h2>{"We <3 hacker news!"}</h2>
    </div>
  );
};

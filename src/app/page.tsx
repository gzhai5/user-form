import React from "react";
import UserForm from "./components/user-form/user-form";

export default function Home() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#000000",
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm />
    </div>
  );
}

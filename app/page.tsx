"use client"
import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [home, setHome] = useState("");

  useEffect(() => {
    fetch("http://test.shipquickfba.com/home")
      .then((response) => response.json())
      .then((data) => setHome(data))
      .catch((error) => console.error(error));
  }, []);

  async function postName(e: { preventDefault: () => void; }) {
    e.preventDefault();
    try {
      await fetch("http://test.shipquickfba.com/post_name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <form onSubmit={postName}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Send Name</button>
      </form>
      {home}
    </div>
  );
}

export default App;
import { useState, useEffect } from "react";

export const Lstorage = () => {
  const [input, setInput] = useState("");
  const [savedValue, setSavedValue] = useState("");

  // Load stored value on page load
  useEffect(() => {
    const saved = localStorage.getItem("username");
    if (saved) {
      setInput(saved);
      setSavedValue(saved);
    }
  }, []);

  // Save to localStorage
  const handleSave = () => {
    localStorage.setItem("username", input);
    setSavedValue(input); // 🔥 this triggers re-render
  };

  return (
    <>
      <div>
        <h2>LocalStorage Example</h2>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your name"
        />

        <button onClick={handleSave}>Save</button>
      </div>

      <span>{savedValue}</span>
    </>
  );
};
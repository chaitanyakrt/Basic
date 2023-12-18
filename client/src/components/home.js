import React from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [user_input, setUser_input] = useState("");

  const handleSubmit = async () => {
    const payload = {
      language: "cpp",
      code,
      user_input,
    };

    console.log("Code:", code);
    console.log("Input:", user_input);

    try {
      const { data } = await axios.post("http://localhost:8000/run", payload);
      console.log(data);
      setOutput(data.output);
    } catch (error) {
      if (error.response) console.log(error.response);
      else console.log(error.message);
    }
  };

  return (
    <div className="homepage">
      <h1>
        Hello {location.state.id}, Welcome to the Online Compilation platform
      </h1>
      <center>
        <h2> Write your Cpp code here</h2>
        <textarea
          rows="20"
          cols="75"
          className="textarea"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        >
          {" "}
        </textarea>

        <h2> Give your input</h2>
        <textarea
          rows="4"
          cols="75"
          className="text"
          value={user_input}
          onChange={(e) => {
            setUser_input(e.target.value);
          }}
        >
          {" "}
        </textarea>

        <br />

        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>

        <br />

        <h2>Output</h2>
        {output && (
          <text className="outputbox">
            <p>{output}</p>
          </text>
        )}
      </center>
    </div>
  );
}

export default Home;

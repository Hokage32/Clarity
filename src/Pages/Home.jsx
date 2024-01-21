import React from "react";
import { useState } from "react";
import axios from "axios";
import Model from "../Components/Model";

const Home = () => {
  const [message, setMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("")
  const [isModelOpen, setIsModelOpen] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('')
    console.log(message);
    axios
      .post(
        "http://localhost:3001/completions",
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((res) => {
        console.log(res.data.choices[0].message.content);
        setChatResponse(res.data.choices[0].message.content)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {isModelOpen && <Model isModelOpen={isModelOpen}/>}
      <form action="" onSubmit={handleSubmit} className="textarea">
        <textarea
          name=""
          id=""
          cols="50"
          
          placeholder="What is on your mind?"
          className="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onSubmit={handleSubmit}
        ></textarea>
        <button>Submit</button>
      </form>
      <div>
        {chatResponse}
      </div>
    </div>
  );
};

export default Home;

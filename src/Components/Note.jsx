import React, { useState } from "react";
import { postData, getData } from "../Redux/action";
import { useDispatch } from "react-redux";
import "../styles/style.css";
import NoteList from "./NoteList";
import { GrAdd } from "react-icons/gr";
import { POST_DATA_SUCCESS } from "../Redux/actionType";
import toast from "react-hot-toast";

const Note = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleText = () => {
    if (text === "") {
      toast("Noting in Notes...");
    } else if (text !== "") {
      const payload = {
        text,
      };
      dispatch(postData(payload))
        .then((res) => {
          if (res === POST_DATA_SUCCESS) {
            toast("Note saved");
            dispatch(getData());
            setText("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="inputdiv">
        <input
          className="noteinput"
          placeholder="Take a note"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn" onClick={handleText}>
          <GrAdd />
        </button>
      </div>
      <NoteList />
    </>
  );
};

export default Note;

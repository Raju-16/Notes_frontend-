import React from "react";
import { useDispatch } from "react-redux";
import { deleteData, getData } from "../Redux/action";
import { AiFillDelete } from "react-icons/ai";
import { DELETE_DATA_SUCCESS } from "../Redux/actionType";

const NoteRight = ({ item }) => {
  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    if (id) {
      dispatch(deleteData(id)).then((res) => {
        if (res === DELETE_DATA_SUCCESS) {
          dispatch(getData());
        }
      });
    }
  };

  return (
    <div className="rightside">
      <p>{item.text}</p>
      <p className="time">{item.createdAt}</p>
      <button className="dltbtn" onClick={() => handleOnDelete(item.id)}>
        <AiFillDelete />
      </button>
    </div>
  );
};

export default NoteRight;

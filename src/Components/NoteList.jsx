import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import NoteLeft from "./NoteLeft";
import NoteMiddle from "./NoteMiddle";
import NoteRight from "./NoteRight";
import "../styles/style.css";

const NoteList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.result);
  console.log("Data", data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="container">
      {data?.length > 0 &&
        data.map((item, index) => {
          return (
            <div key={index}>
              {index === 0 ? (
                <NoteLeft className="left" item={item} />
              ) : index === 1 ? (
                <NoteMiddle className="middle" item={item} />
              ) : (
                <NoteRight className="right" item={item} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default NoteList;

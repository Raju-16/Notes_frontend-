import "./App.css";
import Navbar from "./Components/Navbar";
import Note from "./Components/Note";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div className="App">
        <Navbar />
        <Note />
      </div>
    </>
  );
}

export default App;

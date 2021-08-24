import "./App.css";
import Navbar from "./Component/Navbar";
import Form from "./Component/Form";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <Form head="Enter Your Text" />
      </div>
    </>
  );
}

export default App;

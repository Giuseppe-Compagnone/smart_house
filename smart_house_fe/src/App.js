import Navbar from "./components/Navbar/Navbar";
import Rooms from "./components/Rooms/Rooms";

function App() {
  return (
    <>
      <div id="app" className="container">
        <Navbar />
        <Rooms />
      </div>
    </>
  );
}

export default App;

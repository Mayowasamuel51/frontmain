import Classess from "./components/Classess";
import FetchClass from "./components/FetchClass";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <div className="container is-widescreen">
        <FetchClass />
      </div>

    </div>
  );
}

export default App;


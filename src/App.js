import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Clider from "./components/slider/Clider";
import Textbar from "./components/textbar/Textbar";
import VideoComponent from "./components/video component/VideoComponent";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Clider />
            <Textbar />
            <VideoComponent />
        </div>
    );
}

export default App;

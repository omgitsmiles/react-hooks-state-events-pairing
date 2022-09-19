import data from "../data/video.js";
import Header from "./Header.js";
import Likes from "./Likes.js";
import CommentToggle from "./CommentToggle.js";


function App() {
  console.log("Here's your data:", data);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header data={data}/>
      <Likes data={data}/>
      <CommentToggle data={data}/>
    </div>
  );
}

export default App;

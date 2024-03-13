import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Headers from "./Components/Headers";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  // const [readingTime, setReadingTime] = useState[0];
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };
  const handleMarkAsRead = (time) => {
    console.log(time);
    const newMarkAsRead = parseInt(readingTime) + parseInt(time);
    console.log(newMarkAsRead);
    setReadingTime(newMarkAsRead);
  };
  console.log(readingTime);
  return (
    <>
      <div>
        <Headers></Headers>
        <div className="md:flex max-w-7xl mx-auto space-x-6">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;

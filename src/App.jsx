import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Headers from "./Components/Headers";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };
  return (
    <>
      <Headers></Headers>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;

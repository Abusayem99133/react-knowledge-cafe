import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks }) => {
  //   console.log(bookmarks);
  return (
    <div className="md:w-1/3">
      <h3 className="text-3xl">Bookmarks: {bookmarks.length}</h3>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
};
export default Bookmarks;

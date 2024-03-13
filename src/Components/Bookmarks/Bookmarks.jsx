import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-200 mt-4 py-5 px-10">
      <div>
        <h3 className="text-4xl font-bold text-center mb-6 bg-[#efedfd] text-[#6047ec]">
          Spent Read:{readingTime}
        </h3>
      </div>
      <h3 className="text-3xl text-center mt-2">
        Bookmarks: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;

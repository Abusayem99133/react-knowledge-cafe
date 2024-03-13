import PropTypes from "prop-types";
// import { CiBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark }) => {
  //   console.log(blog);
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img src={cover} alt={`Cover picture`} />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img className="w-14" src={author_img} alt="" />

          <div>
            <h3 className="text-2xl">{author}</h3>

            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>
            {reading_time} min read
            <button onClick={() => handleAddToBookmark(blog)} className="ml-2">
              <i className=" fa-regular fa-bookmark"></i>
            </button>
            {/* <button>
              <CiBookmark></CiBookmark>
            </button> */}
          </span>
        </div>
      </div>

      <h2 className="text-4xl">Title: {title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};
export default Blog;

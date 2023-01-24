import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      body: "TechCrunch is a blog that provides technology and startup news, from the latest developments in Silicon Valley to venture capital funding.",
      author: "Njonge",
      id: 1,
    },
    {
      title: "Latest blog News",
      body: "This blog provides news and opinion pieces on the latest technological developments in art, culture, and science for the mainstream audience.",
      author: "Miriam",
      id: 2,
    },
    {
      title: "Top Vergeblog tips ",
      body: "The Verge’s website homepage is vibrant – a black and white theme with bright accents of orange and magenta.",
      author: "Fred",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

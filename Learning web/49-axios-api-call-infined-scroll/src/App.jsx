import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true)

  async function getData() {
    const {data} = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=4&_start=${posts.length}`
    );
    if (data.length == 0){
      setHasMore(false)
    }
    setPosts([...posts, ...data])
  }

  useEffect(() => { 
    getData()
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length} //This is important field to render the next data
        next={getData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="min-h-screen bg-gray-300 py-10">
          <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 mb-10 shadow-md">
            <h1 className="text-center text-4xl font-bold tracking-wide">
              Posts
            </h1>
          </header>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="w-[300px] h-[400px] bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out group"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-500 capitalize">
                      {post.id} {post.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-2 capitalize">{post.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default App;

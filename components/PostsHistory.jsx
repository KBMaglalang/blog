import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment/moment";

// queries
import { getRecentPosts } from "../lib/queries";

const PostsHistory = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getRecentPosts()
      .then((data) => setRecentPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="rounded-lg bg-gray-200 shadow-lg lg:p-4 mb-8">
      <div className="border-b w-full inline-block py-4 border-gray-400 text-center font-semibold">
        Recent Posts
      </div>
      {recentPosts.map((post) => (
        <Link key={post.title} href={`/post/${post.slug}`}>
          <div className="my-4 text-ellipsis overflow-hidden whitespace-nowrap">
            <span className="mr-2  text-slate-600">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
            <span className="font-bold">{post.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsHistory;

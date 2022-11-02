import React from "react";
import Link from "next/link";
import moment from "moment/moment";

const Post = ({ post }) => {
  return (
    <Link href={`/post/${post.node.slug}`}>
      <div className="rounded-lg bg-gray-200 shadow-lg p-4 mb-8">
        <div className="text-center mb-4 font-semibold text-2xl pt-4">
          <h1>{post.node.title}</h1>
        </div>
        <div>
          <img
            src={post.node.featuredImage.url}
            alt={post.node.title}
            className="w-full shadow-lg rounded-lg"
          />
        </div>
        <div className="py-4 text-slate-400">
          <span>{moment(post.node.createdAt).format("MMM DD, YYYY")}</span>
        </div>
        <div>{post.node.excerpt}</div>
      </div>
    </Link>
  );
};

export default Post;

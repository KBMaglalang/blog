import React from "react";
import Link from "next/link";
import moment from "moment/moment";

const Post = ({ post }) => {
  return (
    <Link href={"#"}>
      <div className="rounded-lg bg-gray-200 shadow-lg lg:p-4 mb-8">
        <div className="text-center mb-4 font-semibold text-2xl pt-4">
          <span>{post.node.title}</span>
        </div>
        <div className="relative">
          <img
            src={post.node.featuredImage.url}
            alt={post.node.title}
            className="w-full shadow-lg rounded-lg"
          />
        </div>
        <div className="py-4 text-slate-400">
          <span>{moment(post.node.createdAt).format("MMM DD, YYYY")}</span>
        </div>
        <div className="mt-4">{post.node.excerpt}</div>
      </div>
    </Link>
  );
};

export default Post;

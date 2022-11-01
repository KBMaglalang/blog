import React from "react";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="rounded-lg bg-gray-200 shadow-lg lg:p-4">
      <div>
        <Link href={"#"}>{post.title}</Link>
      </div>
      <div>image</div>
      <div>{post.excerpt}</div>
    </div>
  );
};

export default Post;

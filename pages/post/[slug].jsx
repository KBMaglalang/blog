import React from "react";
import moment from "moment/moment";
import { RichText } from "@graphcms/rich-text-react-renderer";

// components
import { Comments, CommentsForm } from "../../components";

// queries
import { getPosts, getPostData } from "../../lib/queries";

const Page = ({ post }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="rounded-lg bg-gray-200 shadow-lg lg:p-4 mb-8">
        <div>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="h-full w-full shadow-lg rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="py-4 text-slate-400">
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          <RichText content={post.content.raw} />
        </div>
      </div>
      <CommentsForm slug={post.slug} />
      <Comments slug={post.slug} />
    </div>
  );
};

export default Page;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  console.log(
    "🚀 ~ file: [slug].jsx ~ line 35 ~ getStaticPaths ~ posts",
    posts
  );
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await getPostData(params.slug);

  return {
    props: { post: data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};

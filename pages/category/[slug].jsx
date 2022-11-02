import React from "react";

// queries
import { getCategories, getCategoryPost } from "../../lib/queries";

// components
import { Post, PostsHistory } from "../../components";

const CategoryPost = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky">
            <PostsHistory />
          </div>
        </div>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

// queries
import { getPosts } from "../lib/queries";

// components
import { Post, PostsHistory } from "../components";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4 col-span-1">
            <div className="top-8 lg:sticky">
              <PostsHistory />
            </div>
          </div>
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, i) => (
              <Post post={post} key={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};

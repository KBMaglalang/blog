import Head from "next/head";

// queries
import { getPosts } from "../lib/queries";

// components
import { Post } from "../components";

// ! test data
// const data = [
//   {
//     title: "post-1",
//     excerpt: "short description of post-1",
//   },
//   {
//     title: "post-2",
//     excerpt: "short description of post-2",
//   },
// ];

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-2 col-span-1">
            <div className="relative top-8 lg:sticky">side bar</div>
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

export const getServerSideProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
    // revalidate: 10,
  };
};

import Head from "next/head";

export default function Home() {
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
          <div className="lg:col-span-8 col-span-1">content</div>
        </div>
      </main>
    </div>
  );
}

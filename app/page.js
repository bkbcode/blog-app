import NewBlogButton from "@/components/NewBlogButton";

export default function Home() {
  return (
    <main>
      <section className="px-8 py-10 max-w-7xl mx-auto min-h-screen flex flex-col space-y-16">
        <div className="flex justify-between">
          <div id="logo">
            <h1 className="text-3xl font-bold">SimpleBlog</h1>
          </div>
          <div id="new-blog-button">
            <NewBlogButton />
          </div>
        </div>
        <div id="blog-section" className="text-center">
          <p>Blog section</p>
        </div>
      </section>
    </main>
  );
}

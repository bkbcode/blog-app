import SignInButton from "@/components/SignInButton";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <section className="px-8 py-10 max-w-7xl mx-auto min-h-screen flex flex-col space-y-16">
        <div className="flex justify-between">
          <div id="logo">
            <h1 className="text-3xl font-bold">SimpleBlog</h1>
          </div>
          <SignInButton session={session} />
        </div>
        <div id="blog-section" className="text-center">
          <p>Blog section</p>
        </div>
      </section>
    </main>
  );
}

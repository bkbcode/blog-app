import BackButton from "@/components/BackButton";
import FormCreateBlog from "@/components/FormCreateBlog";

export default function CreateBlog() {
  return (
    <main className="min-h-screen">
      <section className="bg-base-100 px-8 py-10 max-w-7xl mx-auto space-y-8">
        {/* TITLE & BACK BUTTON */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Create new blog</h1>
          <BackButton />
        </div>

        {/* FORM */}
        <FormCreateBlog />
      </section>
    </main>
  );
}

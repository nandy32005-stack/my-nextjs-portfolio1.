import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900 text-white">
      <header className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">This is a temporary homepage for deployment purposes.</p>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <p className="text-xl">🚀 App is ready to deploy!</p>
      </main>

      <Footer />
    </div>
  );
}

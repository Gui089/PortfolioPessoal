import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mx-auto p-4">
        <HeroSection />
      </div>
    </main>
  );
}

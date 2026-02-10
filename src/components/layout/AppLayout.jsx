import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";

export default function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
      <Background />

      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="relative z-10">
        {children}
      </main>

      <footer className="relative z-10 mt-12">
        <Footer />
      </footer>
    </div>
  );
}

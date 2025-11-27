import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} My Japan Life
      </footer>
    </div>
  );
}

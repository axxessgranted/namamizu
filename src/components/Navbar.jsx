import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          My Japan Life
        </Link>
        <nav className="space-x-4">
          <Link to="/blog" className="hover:underline">
            Blog
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

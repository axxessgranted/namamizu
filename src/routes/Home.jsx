import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome — My Japan Life</h1>
      <p className="mb-4">
        A simple blog about living in Kobe, Japan. Stories, photos, and small
        discoveries.
      </p>
      <Link
        to="/blog"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        Read the blog
      </Link>
    </div>
  );
}

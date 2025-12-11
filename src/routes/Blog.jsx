import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { generateDatedSlug } from "../utils/slug";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const modules = import.meta.glob("../posts/*.mdx");
    const load = async () => {
      const entries = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
          const mod = await resolver();
          const meta = mod.meta || {};
          const slug = generateDatedSlug(meta);
          return { module: mod, meta, slug };
        })
      );
      entries.sort((a, b) =>
        (b.meta.date || "").localeCompare(a.meta.date || "")
      );
      setPosts(entries);
    };
    load();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(({ meta, slug }) => {
          return (
            <Link key={slug} to={`/posts/${slug}`} className="block">
              <PostCard meta={meta} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

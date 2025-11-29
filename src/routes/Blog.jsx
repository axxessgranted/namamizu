import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const modules = import.meta.glob("../posts/*.mdx");
    const load = async () => {
      const entries = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
          const mod = await resolver();
          return { path, module: mod };
        })
      );
      entries.sort((a, b) => b.path.localeCompare(a.path));
      setPosts(entries);
    };
    load();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(({ path, module }) => {
          const Post = module.default;
          const meta = module.meta || {
            title: path.split("/").pop(),
            date: "",
          };
          return (
            <PostCard key={path} meta={meta}>
              <Post />
            </PostCard>
          );
        })}
      </div>
    </div>
  );
}

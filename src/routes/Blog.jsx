import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // import all mdx files in /src/posts
    const modules = import.meta.glob("../posts/*.mdx");
    const load = async () => {
      const entries = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
          const mod = await resolver();
          // Some MDX setups default export a React component; metadata often on `meta` or frontmatter
          return { path, module: mod };
        })
      );
      // simple sort: by filename (YYYY-MM-DD prefix recommended)
      entries.sort((a, b) => b.path.localeCompare(a.path));
      setPosts(entries);
    };
    load();
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold">Blog</h1>
      {posts.map(({ path, module }) => {
        // Render the MDX component inline
        const Post = module.default;
        const meta = module.meta || { title: path.split("/").pop(), date: "" };
        return (
          <PostCard key={path} meta={meta}>
            <Post />
          </PostCard>
        );
      })}
    </div>
  );
}

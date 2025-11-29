import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { generateDatedSlug } from "../utils/slug";

export default function PostPage() {
  const { slug } = useParams();
  const modules = import.meta.glob("../posts/*.mdx");
  const [Post, setPost] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const load = async () => {
      for (const resolver of Object.values(modules)) {
        const mod = await resolver();
        if (generateDatedSlug(mod.meta) === slug) {
          setPost(() => mod.default);
          setMeta(mod.meta);
          break;
        }
      }
    };
    load();
  }, [slug]);

  if (!Post) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{meta.date}</p>
      {meta.image && <img src={meta.image} className="rounded-xl mb-6" />}
      <Post />
    </div>
  );
}

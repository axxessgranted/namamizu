import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { generateDatedSlug, getTitleSlug } from "../utils/slug";

import ReadingProgress from "../components/ReadingProgress";
import { mdxComponents } from "../utils/mdx-components";

export default function PostPage() {
  const { slug } = useParams();
  const modules = import.meta.glob("../posts/*.mdx");

  const [Post, setPost] = useState(null);
  const [meta, setMeta] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  useEffect(() => {
    const load = async () => {
      const entries = [];

      for (const [path, resolver] of Object.entries(modules)) {
        const mod = await resolver();
        const m = mod.meta || {};
        const s = getTitleSlug(m);
        entries.push({ slug: s, meta: m, component: mod.default });
      }

      // sort newest → oldest
      entries.sort((a, b) =>
        (b.meta.date || "").localeCompare(a.meta.date || "")
      );

      const index = entries.findIndex((e) => {
        return e.slug === slug;
      });
      if (index !== -1) {
        const current = entries[index];
        setPost(() => current.component);
        setMeta(current.meta);
        setPrevPost(entries[index + 1] || null);
        setNextPost(entries[index - 1] || null);
      }
    };
    load();
  }, [slug]);

  if (!Post) return <p>Loading...</p>;

  return (
    <>
      <ReadingProgress className="h-full bg-gradient-to-r from-blue-500 to-sky-400 h-0.5" />
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
          <p className="text-sm text-gray-500 mb-4">{meta.date}</p>
        </header>
        {meta.image && <img src={meta.image} className="rounded-2xl mb-10" />}

        <div className="prose prose-lg max-w-none">
          <Post components={mdxComponents} />
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12 pt-6 border-t text-blue-600">
          {prevPost ? (
            <Link
              to={`/posts/${generateDatedSlug(prevPost.meta)}`}
              className="hover:underline"
            >
              ← {prevPost.meta.title}
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              to={`/posts/${generateDatedSlug(nextPost.meta)}`}
              className="hover:underline"
            >
              {nextPost.meta.title} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </article>
    </>
  );
}

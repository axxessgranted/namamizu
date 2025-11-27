export default function PostCard({ meta, children }) {
  return (
    <article className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-semibold">{meta.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{meta.date}</p>
      <div className="prose max-w-none">{children}</div>
    </article>
  );
}

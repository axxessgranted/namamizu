export default function PostCard({ meta, children }) {
  return (
    <article className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white overflow-hidden">
      {meta.image && (
        <img
          src={meta.image}
          alt={meta.title}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />
      )}
      <h2 className="text-2xl font-semibold mb-1">{meta.title}</h2>
      <p className="text-sm text-gray-500 mb-3">{meta.date}</p>
      <div className="prose max-w-none">{children}</div>
    </article>
  );
}

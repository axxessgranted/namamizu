export default function MdxImage({ src, alt = "", caption }) {
  return (
    <figure className="my-10">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="mx-auto rounded-2xl shadow-sm"
      />

      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

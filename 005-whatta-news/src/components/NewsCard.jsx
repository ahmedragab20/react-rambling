export default function NewsCard({ item }) {
  if (!item) return null;

  return (
    <div className="p-2 border dark:border-stone-700 mb-2 rounded-xl hover:shadow">
      <div>
        <div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            #{item.category}
          </span>
        </div>
        <h3 className=" font-bold line-clamp-2" title={item.title}>
          {item.title}
        </h3>
      </div>
      <div className="my-3">
        <p className="line-clamp-6" title={item.description}>
          {item.description}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500 truncate" title={item.author}>
          {item.author}
        </p>
        {item?.source && item?.url && (
          <a
            className="text-sm text-blue-500"
            href={item.url}
            target="_blank"
            rel="noreferrer"
            title={item.source}
          >
            @{item.source}
          </a>
        )}
      </div>
    </div>
  );
}

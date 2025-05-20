export function ProjectCard({ image, title, description, tags, link, github }) {
  return (
    <article className="flex flex-col space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
      <div className="w-full md:w-1/2">
        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <img
            alt={title}
            className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
            loading="lazy"
            src={image}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 md:max-w-lg">
        <h3
          className="text-2xl font-bold"
          style={{ color: "rgba(var(--color-text-rgb),1)" }}
        >
          {title}
        </h3>
        <div className="flex flex-wrap mt-2">
          <ul className="flex flex-row mb-2 gap-x-2">
            {tags.map((tag, tagIndex) => (
              <li key={tagIndex}>
                <span
                  className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}
                >
                  {tag.icon && <tag.icon className="size-4" />}
                  {tag.name}
                </span>
              </li>
            ))}
          </ul>

          <div
            className="mt-2"
            style={{ color: "rgba(var(--color-text-rgb), 0.6)" }}
          >
            {description}
          </div>

          <footer className="flex items-end justify-start mt-4 gap-x-4">
            {github && (
              <a
                href={github}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
              >
                <span>Code</span>
              </a>
            )}
            {link && (
              <a
                target="_blank"
                rel="noreferrer"
                href={link}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#316998] rounded-md hover:bg-[#25507d]"
              >
                <span>Ver proyecto</span>
              </a>
            )}
          </footer>
        </div>
      </div>
    </article>
  );
}

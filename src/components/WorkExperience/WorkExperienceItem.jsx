export function WorkExperienceItem({
  title,
  company,
  description,
  link,
  date,
}) {
  return (
    <div
      className="relative mx-12 pb-12 grid before:absolute before:left-[-34px] before:block before:h-full before:border-l-2 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4"
      style={{ color: "rgba(var(--color-text-rgb), 0.2)" }}
    >
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span
            className="absolute rounded-full text-5xl"
            style={{ color: "rgba(var(--color-blue-rgb), 1)", left: "-42px" }}
          >
            &bull;
          </span>
          <h3
            className="text-xl font-bold"
            style={{ color: "rgba(var(--color-blue-rgb), 1)" }}
          >
            {title}
          </h3>
          <h4
            className="font-semibold text-xl"
            style={{ color: "rgba(var(--color-text-rgb), 0.6)" }}
          >
            {company}
          </h4>
          <time
            className="p-0 m-0 text-sm"
            style={{ color: "rgba(var(--color-text-rgb), 0.5)" }}
          >
            {date}
          </time>
        </div>
      </div>
      <div
        className="relative flex flex-col gap-2 pb-4 md:col-span-3"
        style={{ color: "rgba(var(--color-text-rgb), 0.6)" }}
      >
        {description}
        {link && (
          <a
            href={link}
            className="inline-flex items-center hover:underline"
            style={{ color: "rgba(var(--color-blue-rgb), 1)" }}
          >
            Saber más{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 icon icon-tabler icon-tabler-chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

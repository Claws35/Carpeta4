export function WorkExperienceItem({
  title,
  company,
  description,
  link,
  date,
}) {
  return (
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-[#316998] -left-[42px] absolute rounded-full text-5xl">
            &bull;
          </span>
          <h3 className="text-xl font-bold text-[#316998]">{title}</h3>
          <h4 className="font-semibold text-xl text-gray-600">{company}</h4>
          <time className="p-0 m-0 text-sm text-gray-600/80">{date}</time>
        </div>
      </div>
      <div className="relative flex flex-col gap-2 pb-4 text-gray-600 md:col-span-3">
        {description}
        {link && (
          <a
            href={link}
            className="inline-flex items-center text-[#316998] hover:underline"
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

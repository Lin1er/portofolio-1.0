import * as React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  imageId: string;
}

export const Project: React.FC<ProjectProps> = ({ title, description, link, imageId }) => {
  const hasImage = imageId && imageId !== 'blank';

  return (
    <a
      href={link}
      className="block"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open project ${title}`}
    >
      <div className="w-full flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        {hasImage && (
          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden bg-gray-50 border border-gray-100">
            <img
              src={`/projects/${imageId}.png`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-semibold text-[#8c6350] truncate">
            {title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base mt-1 line-clamp-3">
            {description}
          </p>
        </div>

        {/* subtle chevron to indicate link (optional; remove if undesired) */}
        <div className="hidden md:flex items-center text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

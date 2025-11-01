import * as React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  imageId: string;
}

export const Project: React.FC<ProjectProps> = ({ title, description, link, imageId }) => {
  return (
    <a href={link} className='block' target="_blank" rel="noopener noreferrer">
      <div className="w-full h-35 flex overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <img
          src={`/projects/${imageId}.png`}
          alt={title}
          className="h-24 w-24 md:h-32 md:w-32 object-cover p-2"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-[#8c6350] mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}


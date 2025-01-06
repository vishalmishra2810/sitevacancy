import React, { useState } from "react";

interface JobModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const JobModal: React.FC<JobModalProps> = ({ setIsOpen }) => {

  return (
    <div>

      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        {/* Modal Content */}
        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-[800px]">
          <span className="text-purple-800 text-sm">Google</span>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Full Stack Developer</h2>
            <button onClick={() => setIsOpen(false)}>x</button>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
              Full-time
            </span>
            <span className="text-slate-600 text-sm flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>{' '}
              Remote, UK
            </span>
          </div>

          <div className="mt-4 text-lg">About Google</div>
          <div className="mt-4 text-sm">Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day.     <br /><br /> As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.
            <br /><br /></div>
          <div className="mt-4 text-lg">Job Description</div>
          <div className="mt-4 text-sm">We are looking for Engineers with expertise and experience in designing, developing, implementing, and scaling web applications for our rapidly growing Technology team. We are expanding our team and are looking for innovative, high-energy, bright individuals who can contribute to the growth of one of the fastest-growing product companies in India.<br /><br /></div>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"

          >
            Close Modal
          </button>
        </div>

      </div>

    </div>
  );
};

export default JobModal;

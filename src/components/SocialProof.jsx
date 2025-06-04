import React from "react";

const SocialProof = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="w-1/2 px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div className=" mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl  tracking-tight font-extrabold text-gray-900 dark:text-white">
            Risk without visibility is risk accepted
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Crowsnest empowers modern enterprises to maintain security assurance
            at scale — providing the real-time compliance visibility and control
            today’s CISOs demand.
          </p>
        </div>
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center card p-5">
            <span className="mb-2 text-6xl md:text-4xl font-extrabold">
              $4.88 m
            </span>
            <dd className="font-light mx-auto text-gray-500 dark:text-gray-400">
              The average cost of a data breach in 2024
            </dd>
          </div>
          <div className="flex flex-col mx-auto items-center justify-center card h-36">
            <span className="mb-2 text-6xl md:text-4xl font-extrabold">
              $14.82 m
            </span>
            <dd className="font-light mx-auto text-gray-500 dark:text-gray-400">
              Average cost impact from regulatory fines
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center card p-5">
            <span className="mb-2 text-6xl md:text-4xl font-extrabold">
              292 days
            </span>
            <dd className="font-light mx-auto text-gray-500 dark:text-gray-400">
              average prolonged breach detection
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default SocialProof;

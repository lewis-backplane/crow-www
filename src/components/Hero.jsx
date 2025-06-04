const Hero = () => {
  return (
    <section className="dark:bg-crow-dark ">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center ">
        <img
          src="img/cnui.svg"
          className="h-88 mb-10 mx-auto shadow-xl rounded-lg"
        />
        <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span className="font-light">from</span> Cyber Compliance
          <span className="font-light"> to</span> Cyber Strategy
        </h1>

        <p className="mb-8 mt-8 text-lg font-normal text-gray-500 lg:text-lg sm:px-16  dark:text-gray-400">
          CrowsNest is a cyber security compliance automation platform that
          gives enterprises real-time visibility into their compliance posture.
          By bridging the gap between multiple security tools, it transforms
          static frameworks into dynamic, actionable insights—turning compliance
          from a checkbox exercise into a catalyst for cyber resilience and
          executive decision-making.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="http://localhost:3000"
            target="_blank"
            className="bg-crow-primary text-white inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-black  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Try it out
          </a>
          <a
            href="https://youtu.be/mP50ssQO-gs?si=mmP4snI6uvKSRckN"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-red-500 mr-2"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

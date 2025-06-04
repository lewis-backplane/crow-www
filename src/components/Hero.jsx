const Hero = () => {
  return (
    <section className="dark:bg-crow-dark ">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center ">
        <img
          src="./img/cnui.svg"
          className="h-88 mb-10 mx-auto shadow-xl rounded-lg"
        />

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Crowsnest, from Cyber Compliance to Cyber Strategy
        </h1>
        <p className="mb-8 mt-8 text-lg font-normal text-gray-500 lg:text-lg sm:px-16  dark:text-gray-400">
          Crowsnest is a cyber security compliance automation platform that
          gives enterprises real-time visibility into their compliance posture.
          By bridging the gap between multiple security tools, it transforms
          static frameworks into dynamic, actionable insights—turning compliance
          from a checkbox exercise into a catalyst for cyber resilience and
          executive decision-making.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Demo
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Watch video
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

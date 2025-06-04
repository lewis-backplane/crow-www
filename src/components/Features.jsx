const Features = () => {
  return (
    <section className="mx-auto w-4/5 px-16 dark:bg-crow-dark">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
          <div className="border rounded-lg p-5">
            <div className=" justify-center mx-auto items-center mb-4   bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-crow-primary dark:text-gray-100"
              >
                <path d="m5 8 6 6" />
                <path d="m4 14 6-6 2-3" />
                <path d="M2 5h12" />
                <path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" />
                <path d="M14 18h6" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-lg text-crow-primary text-center font-bold dark:text-white h-12">
                Control Translation
              </h3>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-xs">
              Map evidence and signals from your tools to frameworks like NIST,
              ISO 27001, CIS, and SOC 2—automatically. Eliminate manual
              spreadsheets and ensure coverage across requirements.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <div className="flex justify-center  mx-auto items-center mb-4 w-10 h-32 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-crow-primary dark:text-gray-100"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg text-crow-primary text-center font-bold dark:text-white h-12">
              Automated Compliance
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-5">
              A centralized, always-updated view of your compliance posture
              across teams, tools, and products. Know where you stand in
              real-time—with no refresh button.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <div className="flex mx-auto justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-crow-primary dark:text-gray-100"
              >
                <path d="M16 7h.01" />
                <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
                <path d="m20 7 2 .5-2 .5" />
                <path d="M10 18v3" />
                <path d="M14 17.75V21" />
                <path d="M7 18a6 6 0 0 0 3.84-10.61" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg text-crow-primary text-center font-bold dark:text-white h-12">
              Data Extractors
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-5">
              Assign responsibilities, tag reviewers, and track progress. Bring
              engineering, GRC, and leadership into one shared space—without
              breaking silos.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <div className="flex mx-auto justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-crow-primary dark:text-gray-100"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg text-crow-primary text-center font-bold dark:text-white h-12">
              Audit Ready
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-5">
              Continuously collect and store control evidence from integrated
              tools, creating an audit-ready trail without needing to chase
              stakeholders.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <div className="flex mx-auto justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-crow-primary dark:text-gray-100"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg text-crow-primary text-center font-bold dark:text-white h-12">
              Risk & Gap Analysis
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-5">
              Highlight control gaps and risk exposures automatically. Get
              prioritized recommendations to reduce risk and accelerate
              remediation.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-crow-primary dark:text-gray-100"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg text-crow-primary text-center font-bold dark:text-white h-12">
              Customise Framework
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-5">
              Visualize how controls align across multiple frameworks. Use one
              control implementation to satisfy many, and benchmark against
              industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

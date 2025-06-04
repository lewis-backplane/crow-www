const FeatureFrameworks = ({ vendors }) => {
  return (
    <section className="dark:bg-crow-dark">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Assurance against all major security frameworks
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            <p>
              CrowsNest continuously maps your security signals to leading
              industry frameworks like ISO 27001, NIST, CIS, SOC 2, and more —
              automatically identifying control coverage, gaps, and compliance
              status. Whether you're preparing for an audit or scaling trust
              with customers, CrowsNest keeps you aligned and audit-ready by
              design.
            </p>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 items-center">
          {vendors.map((vendor) => (
            <div>
              <img className="w-32" src={vendor.logo} alt={vendor.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureFrameworks;

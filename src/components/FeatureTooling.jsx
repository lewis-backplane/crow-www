const FeatureTooling = ({ vendors }) => {
  return (
    <section className="dark:bg-crow-dark">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-8 items-center">
          {vendors.map((vendor) => (
            <div>
              <img className="w-32" src={vendor.logo} alt={vendor.name} />
            </div>
          ))}
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Connect to Everything That Matters
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            <p>
              Crowsnest plugs into hundreds of security tools across your stack
              — cloud, CI/CD, identity, endpoints, and more — pulling real-time
              signals into one unified view. No silos, no stale data. Just
              always-on visibility that reflects your true compliance posture.
            </p>

            <p>
              Go beyond surface-level vendor dashboards. Crowsnest delivers
              deep, actionable insights with business-contextualised risk
              visibility, enabling the right teams to remediate efficiently and
              with clarity. Multicloud support isn’t a premium — it’s built in
              from day one.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureTooling;

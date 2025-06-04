const FeatureSection = ({ vendors }) => {
  return (
    <section className="dark:bg-crow-dark">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Seamless Multi-Cloud Integration.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            <p>
              Crowsnest integrates effortlessly with your existing cloud
              platforms — no heavy lifting required. It pulls live compliance
              telemetry directly into the Crowsnest Compliance Manager, giving
              you a unified view of your organisation’s security posture through
              the lens of individual products and workloads.
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

export default FeatureSection;

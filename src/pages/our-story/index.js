import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Testimonial from "../../components/Testimonial";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Meta description"
    >
      <header>
        <div className="max-w-4xl mx-auto px-4 text-center p-10">
          <h2 className="text-5xl tracking-tight  text-gray-900 dark:text-white">
            Our Story
          </h2>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 text-justify mb-16 ">
        <Testimonial
          quote="Crowsnest was born out of a simple but pressing reality: cybersecurity
          compliance is broken."
          name="Robert Erenberg-Andersen"
          role="CEO & Founder"
        />

        <p>
          For years, our team worked across global enterprises, scaling
          startups, and critical infrastructure—leading security programs,
          responding to incidents, and navigating audits under pressure. Time
          and again, we saw the same pattern: security teams drowning in
          spreadsheets, frameworks siloed in PDFs, and compliance becoming a
          box-ticking exercise rather than a source of assurance. We knew there
          had to be a better way.
        </p>
        <p>
          Crowsnest was created to bring clarity and control to cybersecurity
          compliance. Not just another dashboard—but a living, breathing vantage
          point for your organization’s security posture. A single place where
          frameworks converge, controls are mapped, and gaps are made visible in
          real-time.
        </p>
        <p>
          Built by cyber veterans, Crowsnest bridges the divide between security
          operations and compliance expectations—automating the grunt work,
          aligning your efforts with standards like NIST, ISO 27001, CIS, and
          ISF, and helping your teams move faster, smarter, and with confidence.
          Because in an era of constant threat and ever-shifting regulation,
          compliance isn’t the destination—it’s the radar.
        </p>

        <h2 className="text-3xl tracking-tight  text-gray-900 dark:text-white">
          {" "}
          Introducing Crowsnest
        </h2>
        <p>
          We’ve lived the complexity, the burnout, and the blind spots. We’ve
          seen what happens when compliance becomes disconnected from real
          security—and how teams pay the price in time, trust, and risk.
        </p>

        <div class="relative w-full h-96 mb-10">
          <img
            src="img/dashboard.svg"
            alt="Team Photo"
            className="w-full h-full object-contain"
          />
        </div>

        <p>That’s why we built Crowsnest.</p>
        <p>
          Crowsnest is your central vantage point for cybersecurity compliance.
          A unified platform that brings together frameworks, controls, and
          evidence into one real-time, actionable view. No more static
          spreadsheets, manual mappings, or guesswork.
        </p>
        <p>
          With Crowsnest, security and compliance teams can finally work from
          the same playbook—tracking posture across frameworks like NIST, ISO
          27001, CIS, and ISF, surfacing gaps before they become issues, and
          driving continuous assurance across the organization.
        </p>
        <p>
          It’s not just about passing the audit. It’s about knowing where you
          stand—at all times.
        </p>

        <p>
          Welcome to Crowsnest. Built by cyber experts. Designed for clarity.
          Engineered for trust.
        </p>
      </main>
    </Layout>
  );
}

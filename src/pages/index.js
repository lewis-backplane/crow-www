import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SocialProof from "../components/SocialProof";
import Testimonial from "../components/Testimonial";
import FeatureSection from "../components/FeatureSection";
import FeatureIntegration from "../components/FeatureIntegration";
import FeatureTooling from "../components/FeatureTooling";
import FeatureFrameworks from "../components/FeatureFrameworks";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const cloudvendors = [
    { name: "microsoft", logo: "img/vendors/microsoft.png" },
    { name: "google", logo: "img/vendors/google.png" },
    { name: "amazon", logo: "img/vendors/amazon.png" },
    { name: "oracle", logo: "img/vendors/oracle.png" },
  ];

  const frameworkvendors = [
    { name: "nist", logo: "img/vendors/nist.svg" },
    { name: "hipaa", logo: "img/vendors/hipaa.png" },
    { name: "iso", logo: "img/vendors/iso.png" },
    { name: "soc2", logo: "img/vendors/soc2.png" },
  ];

  const vendors = [
    {
      name: "okta",
      logo: "img/vendors/okta.png",
    },
    {
      name: "cyberark",
      logo: "img/vendors/cyberark.png",
    },
    {
      name: "crowdstrike",
      logo: "img/vendors/crowdstrike.png",
    },
    {
      name: "qualys",
      logo: "img/vendors/qualys.png",
    },
    {
      name: "splunk",
      logo: "img/vendors/splunk.png",
    },
    {
      name: "wiz",
      logo: "img/vendors/wiz.png",
    },
  ];

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Meta description"
    >
      <header>
        <div className="max-w-4xl mx-auto px-4 text-center p-10">
          <Hero />
        </div>
      </header>

      <main className="  mx-auto w-4/5">
        <SocialProof />
        <FeatureSection />
        <FeatureFrameworks vendors={frameworkvendors} />

        <FeatureTooling vendors={vendors} />
        <FeatureIntegration vendors={cloudvendors} />

        <Testimonial
          quote="CrowsNest isn't just a tool it's become a strategic cornerstone for secure, modern businesses."
          name="Robert Erenberg-Andersen"
          role="CEO & Founder"
        />
      </main>
    </Layout>
  );
}

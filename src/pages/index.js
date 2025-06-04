import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SocialProof from "../components/SocialProof";
import Testimonial from "../components/Testimonial";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

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

      <main className="  mx-auto">
        <SocialProof />
        <Features />
        <Testimonial />
      </main>
    </Layout>
  );
}

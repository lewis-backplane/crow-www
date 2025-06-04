import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Features from "../../components/Features";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Meta description"
    >
      <header>
        <div className="max-w-4xl mx-auto px-4 text-center p-10">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Product Features
          </h2>
        </div>
      </header>

      <main className=" mx-auto px-4 text-justify mb-16 ">
        <Features />
      </main>
    </Layout>
  );
}

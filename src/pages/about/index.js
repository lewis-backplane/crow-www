import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Team from "../../components/Team";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Meta description"
    >
      <header>
        <div className=" mx-auto px-4 text-center p-10"></div>
      </header>

      <main className="mx-auto">
        <Team />
      </main>
    </Layout>
  );
}

import Solutions from "@/components/home/Solutions";
import Apps from "@/components/home/Apps";
import PortfolioIntro from "./PortfolioIntro";

export const metadata = {
  title: "Portfolio, KeelCrest Holding LTD",
  description:
    "The portfolio of KeelCrest Holding LTD: private investments and long-term value creation across digital ventures.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioIntro />
      <Apps />
      <Solutions />
    </>
  );
}

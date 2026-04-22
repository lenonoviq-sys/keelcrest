import Leadership from "@/components/home/Leadership";
import Ownership from "@/components/home/Ownership";
import LeadershipHero from "./LeadershipHero";

export const metadata = {
  title: "Leadership, KeelCrest Holding LTD",
  description:
    "The leadership of KeelCrest Holding LTD, a private firm shaping the digital ventures of tomorrow.",
};

export default function LeadershipPage() {
  return (
    <>
      <LeadershipHero />
      <Ownership />
      <Leadership />
    </>
  );
}

import Banner from "@/components/Home/Banner/Banner";
import BestSeller from "@/components/Home/BestSeller/BestSeller";
import ChooseUs from "@/components/Home/ChooseUs/ChooseUs";
import CustomerFeedback from "@/components/Home/CustomerFeedback/CustomerFeedback";
import GetStarted from "@/components/Home/GetStarted/GetStarted";
import NavSection from "@/components/Home/NavSection/NavSection";
import TeamMember from "@/components/Home/TeamMember/TeamMember";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1920px]">
      <div className="pt-[51px] px-4 rounded-b-lg md:px-[65px] md:h-[560px] bg-[#880808]">
        <NavSection></NavSection>
        <Banner></Banner>
      </div>
      <GetStarted></GetStarted>
      <ChooseUs></ChooseUs>
      <BestSeller></BestSeller>
      <CustomerFeedback></CustomerFeedback>
      <TeamMember></TeamMember>
    </main>
  );
}

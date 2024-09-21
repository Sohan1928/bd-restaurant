"use client";
import { useEffect } from "react";
import Banner from "@/components/Home/Banner/Banner";
import BestSeller from "@/components/Home/BestSeller/BestSeller";
import Blog from "@/components/Home/Blog/Blog";
import ChooseUs from "@/components/Home/ChooseUs/ChooseUs";
import Client from "@/components/Home/Client/Client";
import CustomerFeedback from "@/components/Home/CustomerFeedback/CustomerFeedback";
import Footer from "@/components/Home/Footer/Footer";
import GetStarted from "@/components/Home/GetStarted/GetStarted";
import ItWork from "@/components/Home/ItWork/ItWork";
import NavSection from "@/components/Home/NavSection/NavSection";
import TeamMember from "@/components/Home/TeamMember/TeamMember";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <main className="mx-auto max-w-[1920px] overflow-x-hidden">
      <div className="pt-[51px] px-4 rounded-b-lg md:px-[65px] md:h-[640px] bg-[#880808]">
        <NavSection></NavSection>
        <Banner></Banner>
      </div>
      <GetStarted></GetStarted>
      <ChooseUs></ChooseUs>
      <BestSeller></BestSeller>
      <CustomerFeedback></CustomerFeedback>
      <TeamMember></TeamMember>
      <ItWork></ItWork>
      <Blog></Blog>
      <Client></Client>
      <Footer></Footer>
    </main>
  );
}

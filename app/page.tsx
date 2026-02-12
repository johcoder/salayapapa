import AboutPrayerNetwork from "@/components/ui/Aboutnetwork";
import SlidingCards from "@/components/ui/Cardslider";
import Hero from "@/components/ui/Hero";
import PrayerCards from "@/components/ui/PrayerCards";
import StructuredData from "@/components/ui/StructedData";
import VideoYaPapaModal from "@/components/ui/Video";
export default function Home() {
  return (
    <>
    <StructuredData />
    <Hero /><AboutPrayerNetwork />
    <PrayerCards />
    <VideoYaPapaModal />
    <SlidingCards />
    </>
  );
}
